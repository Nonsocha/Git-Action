// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my web application!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
