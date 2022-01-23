import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

function errorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || 'Server Error';

  res.status(status).json({ success: false, status, message });
}

export default errorHandler;
