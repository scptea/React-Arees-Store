const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory (if you have static files)
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routers
const mainRouter = require('./routes/main');
const menuRouter = require('./routes/menu');
const aboutRouter = require('./routes/about');
app.use('/', mainRouter);
app.use('/menu', menuRouter);
app.use('/about', aboutRouter);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});