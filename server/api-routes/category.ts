import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { categoryService } from '../services';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  const categories = categoryService.getAllList();
  res.json(categories);
});

export default router;
