import { Request, Response, NextFunction } from 'express';
import { serviceService } from '../services';

export default {
  getServicesByCategoryIdx: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { categoryIdx } = req.query;
      const result = await serviceService.getServicesByCategoryIdx(
        Number(categoryIdx)
      );
      res.json(result);
    } catch (e) {
      next('Internal Server Error');
    }
  },

  getTotalServiceCount: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { categoryIdx } = req.query;
      const result = await serviceService.getTotalServiceCount(
        Number(categoryIdx)
      );
      res.json(result);
    } catch (e) {
      next('Internal Server Error');
    }
  }
};
