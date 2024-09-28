const mongoose = require('mongoose');
const User = require('../models/UserModel');
const { Timestamp } = require('mongodb');


const codeSnippetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    html: {
        type: String,
        default: ''
    },
    css: {
        type: String,
        default: ''
    },
    js: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }, 


});

module.exports = mongoose.model('CodeSnippet', codeSnippetSchema);
