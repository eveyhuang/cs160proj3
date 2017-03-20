var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var muesliingre = require('./routes/muesliingre');
var chocoingre = require('./routes/chocoingre');
var dahlingre = require('./routes/dahlingre');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/index', index);

app.get('/mueslisteps', function (req, res, next) {
  res.render('mueslisteps');
});

app.get('/pumpsteps', function (req, res, next) {
  res.render('easypotatodahl');
});

app.get('/chocolatesteps', function (req, res, next) {
  res.render('chocolatesteps');
});

app.get('/muesliingre', function (req, res, next) {
  res.render('muesliingre');
});

app.get('/chocoingre', function (req, res, next) {res.render('chocoingre');});

app.get('/dahlingre', function (req, res, next) {res.render('dahlingre');});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
