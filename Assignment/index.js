// index.js
const express = require('express'); // Import Express
const app = express();              // Create an Express application
const PORT = 3000;                  // Define the port

// Define the GET endpoint
app.get('/hello', (req, res) => {
    // Return a JSON response with status code 200 (default)
    res.json({ message: 'Hello API!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
