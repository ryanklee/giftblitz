const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

var db;
var port = 3000;

MongoClient.connect('mongodb://ryanklee:polecatglucosemarquessgelatin@ds259855.mlab.com:59855/giftblitz', (err, database) => {
  if (err) return console.log(err);
    db = database;
    app.listen(port, ( ) => {
      console.log('listening on 3000');
  })
})

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
    
  db.collection('groups').find().toArray(function(err, results) {
      console.log(results);
  })
})

app.post('/groups', (req, res) => {
  db.collection('groups').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
      res.redirect('/');
    })
})
