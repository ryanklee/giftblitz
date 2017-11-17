require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


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

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log('running server on port ' + port);
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


