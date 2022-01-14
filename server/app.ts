import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import { sampleRouter } from './api-routes';

const app = express();
const server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', '4000');

server.listen('4000');
app.use('/sample', sampleRouter);

module.exports = app;