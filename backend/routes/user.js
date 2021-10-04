const express = require('express');
const Router = express.Router();
const userCtrl = require('../controllers/userctrl');


Router.get('/',function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>requette user</h1>');
  
});


Router.post('/register/',userCtrl.register);
Router.post('/login/',userCtrl.login);

Router.get('/login/',function (req, res) {
  res.render('pages/user_login');
  
});

module.exports = Router;