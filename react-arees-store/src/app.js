const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Middleware to parse request body

const app = express();
const port = 3000;

// Use path.resolve to get an absolute path to the "public" directory
const publicPath = path.resolve(__dirname, 'public');

// Serve static files from the "public" directory (if you have static files)
app.use(express.static(publicPath));

// Use middleware to parse application/x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Import and use routers
const mainRouter = require('./routes/main');
const menuRouter = require('./routes/menu');
const aboutRouter = require('./routes/about');
const hiringRouter = require('./routes/hiring'); 
const formRouter = require('./routes/form'); 
const confirmRouter = require('./routes/confirm'); 
const arRouter = require('./routes/ar'); 

app.use('/index-ar.html', arRouter);
app.use('/', mainRouter);
app.use('/menu', menuRouter);
app.use('/about', aboutRouter);
app.use('/form', formRouter);
app.use('/hiring', hiringRouter);
app.use('/confirmation', confirmRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
