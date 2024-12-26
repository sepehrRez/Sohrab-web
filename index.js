// *****************************************************
// <!-- Section 1 : Import Dependencies -->
// *****************************************************
const express = require('express'); // To build an application server or API
const app = express();
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios'); // To make HTTP requests from our server.

// *****************************************************
// <!-- Section 2 -->
// *****************************************************
app.use(express.static(__dirname + '/public')); //allows express to access local css, javascript, etc in public file

// create `ExpressHandlebars` instance and configure the layouts and partials dir.
const hbs = handlebars.create({
  extname: 'hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
});



// *****************************************************
// <!-- Section 3 : App Settings -->
// *****************************************************

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json()); // specify the usage of JSON for parsing request body.




// *****************************************************
// <!-- Section 4 : API Routes -->
// *****************************************************

// redirect to login page 
app.get('/', (req, res)=>{
  res.redirect('/home') 
  });

app.get('/home', (req, res) => {
  res.render('pages/home');
});

app.get('/education', (req, res) => {
  res.render('pages/education');
});

app.get('/experience', (req, res) => {
  res.render('pages/experience');
});

app.get('/projects', (req, res) => {
  res.render('pages/projects');
});

app.get('/publications', (req, res) => {
  res.render('pages/publications');
});

// *****************************************************
// <!-- Section 5 : Start Server-->
// starting the server and keeping the connection open to listen for more requests
module.exports = app.listen(3000); 
console.log('Server is listening on port 3000');