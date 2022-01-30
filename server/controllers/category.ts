import { Request, Response, NextFunction } from 'express';
import { allCategories } from '../models/Category/model';

export default {
  getAllCategories: function (req: Request, res: Response, next: NextFunction) {
    res.json(allCategories);
  }
};
