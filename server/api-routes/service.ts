import express from 'express';
import { serviceController } from '../controllers';

const router = express.Router();

router.get('/', serviceController.getServicesByCategoryIdx);

export default router;
