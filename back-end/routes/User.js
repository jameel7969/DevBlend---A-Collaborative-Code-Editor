const express = require('express');
const { loginUser, signupUser, } = require('../controllers/UserController');
const { createCodeSnippet, getCodeSnippetsByUserId, updateCodeSnippet, deleteCodeSnippet,  } = require('../controllers/CodeSnippetController');

const router = express.Router();

// Existing routes...
router.post('/login', loginUser);
router.post('/signup', signupUser);

// New routes for code snippets
router.post('/code-snippets', createCodeSnippet);
router.get('/code-snippets/:userId', getCodeSnippetsByUserId);
router.put('/code-snippets/:id', updateCodeSnippet);
router.delete('/code-snippets/:id', deleteCodeSnippet);

// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password/:token', resetPassword);




module.exports = router;
