
const express = require('express');
const app = express();
const port = 3000;

//  routes
app.get('/', (req, res) => {
    res.send('Welcome to the Arees Store!');
});

app.get('/menu', (req, res) => {
    res.send('View our coffee machines items.');
});

app.get('/about', (req, res) => {
    res.send('Learn more about our coffee store.');
});

app.get('/order', (req, res) => {
    res.send('Your coffee machine order has been placed!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
