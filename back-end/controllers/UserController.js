const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer'); // Make sure to install nodemailer
const crypto = require('crypto');


const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        const { _id } = user
        const id = _id

        if (user) {
            const { id, fullname, email, username, phoneNumber }= user
            res.status(200).json({id, fullname, email, username, phoneNumber})
        }



        // res.status(200).json({ email, id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Signup user
const signupUser = async (req, res) => {
    const { fullname, username, email, phoneNumber, password, confirmPassword } = req.body;

    try {
        const user = await User.signup(fullname, username, email, phoneNumber, password, confirmPassword)
        // create a token
        const token = createToken(user._id)
        res.status(200).json({ user, token });
        console.log(user, token)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//forgot password
// const forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).send('No account found with that email.');
//         }

//         const resetToken = crypto.randomBytes(20).toString('hex');
//         user.resetToken = resetToken;
//         user.resetExpires = Date.now() + 3600000; // Token expires in 1 hour
//         await user.save();

//         // Send email with reset token
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USERNAME,
//                 pass: process.env.EMAIL_PASSWORD,
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USERNAME,
//             to: email,
//             subject: 'Password Reset Request',
//             text: `You requested a password reset. Please click the following link to reset your password: ${process.env.CLIENT_URL}/reset/${resetToken}`,
//         };

//         await transporter.sendMail(mailOptions);

//         res.send('An email has been sent to ' + email + ' with instructions to reset your password.');
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Server error');
//     }
// };

//reset password
// const resetPassword = async (req, res) => {
//     const { token } = req.params;
//     const { newPassword } = req.body;

//     try {
//         const user = await User.findOne({ resetToken: token, resetExpires: { $gt: Date.now() } });
//         if (!user) {
//             return res.status(401).send('Password reset token is invalid or has expired.');
//         }

//         user.password = newPassword;
//         user.resetToken = undefined;
//         user.resetExpires = undefined;
//         await user.save();

//         res.send('Your password has been changed successfully.');
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Server error');
//     }
// };




module.exports = {
    loginUser,
    signupUser,
    // forgotPassword,
    // resetPassword
}