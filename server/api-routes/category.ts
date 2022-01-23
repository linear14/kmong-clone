import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { allCategories } from '../models/Category/model';

const router = express.Router();

router.get('/', getAllCategories);

function getAllCategories(req: Request, res: Response, next: NextFunction) {
  res.json(allCategories);
}

export default router;
