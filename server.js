"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

let db;

const nav = [{
  Link: '/Create',
  Text: 'Create'
}, {
  Link: '/',
  Text: 'Index'
}, {
  Link: '/Admin',
  Text: 'Admin'
}];

const indexRouter = require('./src/routes/indexRoute')(nav);
const adminRouter = require('./src/routes/adminRoute')(nav);
const createRouter = require('./src/routes/createRoute')(nav);

MongoClient.connect('mongodb://ryanklee:polecatglucosemarquessgelatin@ds259855.mlab.com:59855/giftblitz', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(port, (err) => {
    console.log('running server on port ' + port);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.set('views', './src/views');
app.use('/', indexRouter);
app.use('/Admin', adminRouter);
app.use('/create', createRouter);

// app.get('/', (req, res) => {
//   res.render('index', { title: 'hello from render' });
//   let cursor = db.collection('group').find();
// });

app.post('/group', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');

    db.collection('group').find().toArray(function (err, results) {
      console.log(results);
    });

    res.redirect('/');
  });
});


