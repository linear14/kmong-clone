import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import { categoryRouter } from './api-routes';
import errorHandler from './middleware/errorHandler';

const app = express();
const server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', '4000');

server.listen('4000');
app.use('/api/category', categoryRouter);
app.use(errorHandler);

module.exports = app;
