'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const nav = require('./src/views/nav.model');

const indexRouter = require('./src/routes/index.route')(nav);
const adminRouter = require('./src/routes/admin.route')(nav);
const groupPortalRouter = require('./src/routes/groupportal.route') (nav);
const memberPortalRouter = require('./src/routes/memberportal.route') (nav);

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log('running server on port ' + port);
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('views', './src/views');

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use(['/groupportal', '/group'], groupPortalRouter);
app.use(['/memberportal', '/member'], memberPortalRouter);


