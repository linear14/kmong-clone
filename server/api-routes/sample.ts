import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { sampleService } from '../services';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const sample = await sampleService.getSampleData();
  console.log(sample);
});

export default router;
