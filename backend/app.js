const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { Sequelize } = require('sequelize');
const user = require('./routes/user');

const app = express();










const sequelize = new Sequelize("database_development_job", "samy", "coolman300", {
  dialect: "mysql",
  host: "localhost"
});
try {
  sequelize.authenticate();
  console.log('Connecté à la base de données MySQL!');
  //sequelize.query("SELECT * FROM Users ").then(([results, metadata]) => {
  // console.log(results);
 // })
} catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}
/*
// connection base de donnée
const db = mysql.createConnection({

    host: "localhost",
 
    user: "samy",
 
    password: "coolman300",

    database: "database_development_job"
 
  });

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  
  
});

*/


// jsp ce que c'est les CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  // Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  
  // Configure routes

  // view engine setup

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});



app.use('/user', user);





module.exports = app;