require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const process=require('process');
const {isAuthenticated}=require('./conf/Utils')

// db config
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECT_STRING, {
  useNewUrlParser: true
});

const projectRouter = require('./routes/project');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/project/', projectRouter);
app.use('/auth/', authRouter);
app.use('/user',isAuthenticated,userRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.sendStatus(err.status || 500);
});

module.exports = app;