import express from 'express';
import { serviceController } from '../controllers';

const router = express.Router();

router.get('/', serviceController.getServicesByCategoryIdx);
router.get('/count', serviceController.getTotalServiceCount);

export default router;
