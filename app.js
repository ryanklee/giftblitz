require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
const setPastDeadLines = require('./src/controllers/servers/deadline.controller.server');
const sendEmails = require('./src/controllers/servers/match.controller.server');

const app = express();
const port = process.env.PORT || 3000;
const nav = require('./src/views/nav');
const indexRouter = require('./src/routes/index.route')(nav);
const groupRouter = require('./src/routes/group.route')(nav);
const memberRouter = require('./src/routes/member.route')(nav);

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`running server on port ${port}`);
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('views', './src/views');

app.use('/', indexRouter);
app.use('/group', groupRouter);
app.use('/member', memberRouter);

const rule = new schedule.RecurrenceRule();
rule.minute = 48;

const sched = schedule.scheduleJob(rule, () => {
  setPastDeadLines();
  sendEmails();
});
