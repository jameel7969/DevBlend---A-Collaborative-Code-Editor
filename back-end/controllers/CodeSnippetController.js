const CodeSnippet = require('../models/CodeSnippetModel');

// Create a new code snippet
const createCodeSnippet = async (req, res) => {
    const { userId, html, css, js, title, description, timestamp } = req.body;
    try {
        const codeSnippet = new CodeSnippet({ userId, html, css, js, title, description, timestamp });
        await codeSnippet.save();
        res.status(201).json(codeSnippet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a code snippet by ID
const getCodeSnippetsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const codeSnippets = await CodeSnippet.find({ userId: userId });
        if (!codeSnippets.length) {
            return res.status(404).json({ error: 'No code snippets found for this user' });
        }
        res.status(200).json(codeSnippets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a code snippet by ID
const updateCodeSnippet = async (req, res) => {
    const { id } = req.params;
    const { html, css, js } = req.body;
    try {
        const codeSnippet = await CodeSnippet.findByIdAndUpdate(id, { html, css, js }, { new: true });
        if (!codeSnippet) {
            return res.status(404).json({ error: 'Code snippet not found' });
        }
        res.status(200).json(codeSnippet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCodeSnippet = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSnippet = await CodeSnippet.findByIdAndDelete(id);
        if (!deletedSnippet) {
            return res.status(404).json({ error: 'Code snippet not found' });
        }
        res.status(200).json(deletedSnippet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createCodeSnippet,
    getCodeSnippetsByUserId,
    updateCodeSnippet,
    deleteCodeSnippet
};
