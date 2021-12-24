const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const todosRouter = require('./routes/todosRouter');

const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', '4000');

server.listen('4000');

// app.use('/todos', todosRouter);

module.exports = app;
