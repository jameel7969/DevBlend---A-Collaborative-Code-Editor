const moongose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = moongose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    resetToken: String,
    resetExpires: Date
});



//user static signup
userSchema.statics.signup = async function (fullname, username, email, phoneNumber, password, confirmPassword) {

    if (!fullname || !username || !email || !phoneNumber || !password || !confirmPassword) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    if (password !== confirmPassword) {
        throw Error('Passwords do not match');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ fullname, username, email, phoneNumber, password: hash, confirmPassword: hash });
    return user;
}

// static login method
userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = moongose.model('User', userSchema);
