const express = require('express');
const { engine } = require('express-handlebars'); // Updated import
const path = require('path'); // For handling paths
const app = express();
const port = 3000;

// Set views directory explicitly (if not in default location)
app.set('views', path.join(__dirname, 'views'));

// Set up Handlebars view engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Route for home page
app.get('/', (req, res) => {
    res.render('home', {
        firstname: 'Raj',
        lastname: 'Sathvara',
        title: 'Home Page',
        hel: 'bool'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
