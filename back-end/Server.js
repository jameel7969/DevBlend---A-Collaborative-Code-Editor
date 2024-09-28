const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

//socket
const http = require('http');
const { Server } = require('socket.io');
const ACTIONS = require('./Actions');



//authentications
const userRoutes = require('./routes/User');

// express app
const app = express();

const cors = require('cors');
// Enable CORS for all routes
app.use(cors());


//setup the middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/auth', userRoutes);


// connect to the mongodb datatbase
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listening to the some port number
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on ${process.env.PORT} and connected to database`)
        })
    })
    .catch((error) => {
        console.log(error)
    })





//These all are the socket connections
const server = http.createServer(app);
const io = new Server(server);


const userSocketMap = {};
const roomCodeState = {};

const getALLConnectedClients = (roomId) => {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
        (socketId) => {
            return {
                socketId,
                username: userSocketMap[socketId]
            }
        })
}

io.on('connection', (socket) => {
    console.log('socket connection', socket.id);

    // Listen for 'error' events on the socket
    socket.on('error', (err) => {
        console.error('Socket error:', err);
        // Handle the error, e.g., by logging it or attempting to reconnect
        // socket.destroy(); // Use this if you want to immediately close the socket
    });

    // Handle 'clientError' event if it occurs
    socket.on('clientError', (err, socket) => {
        console.error('Client error:', err);
        socket.destroy(); // Close the socket
    });

    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomId);

        socket.on(ACTIONS.TYPING, (data) => {
            // Broadcast the typing event to all other users in the room
            socket.to(roomId).emit(ACTIONS.TYPING, data);
        });

        const currentCodeState = roomCodeState[roomId] || { html: '', css: '', js: '' };
        socket.emit('CODE_CHANGE', { roomId, fileType: 'html', newCode: currentCodeState.html });
        socket.emit('CODE_CHANGE', { roomId, fileType: 'css', newCode: currentCodeState.css });
        socket.emit('CODE_CHANGE', { roomId, fileType: 'js', newCode: currentCodeState.js });

        const clients = getALLConnectedClients(roomId);
        console.log('clients', clients);
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id
            });
        });
    });


    // leave room
    socket.on("disconnecting", () => {
        const rooms = [...socket.rooms];
        // leave all the room
        rooms.forEach((roomId) => {
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            });
        });

        delete userSocketMap[socket.id];
        socket.leave();
    });


    // Listen for changes from the client
    socket.on('CODE_CHANGE', ({ roomId, fileType, newCode }) => {
        // Update the code state for the specific room and file type
        if (!roomCodeState[roomId]) {
            roomCodeState[roomId] = { html: '', css: '', js: '' };
        }
        roomCodeState[roomId][fileType] = newCode;

        // Broadcast the code change to all users in the room except the sender
        socket.to(roomId).emit('CODE_CHANGE', { roomId, fileType, newCode });
    });



});


const PORT = process.env.SOCKETPORT;
//listen for requests
server.listen(PORT, () => {
    console.log(`Socket Server is listening on port ${PORT}`);
})