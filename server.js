'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const nav = require('./src/models/nav.model');

const indexRouter = require('./src/routes/index.route')(nav);
const adminRouter = require('./src/routes/admin.route')(nav);
const createGroupRouter = require('./src/routes/creategroup.route') (nav);
const createMemberRouter = require('./src/routes/createmember.route') (nav);

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
app.use(['/creategroup', '/group'], createGroupRouter);
app.use(['/createmember', '/member'], createMemberRouter);


