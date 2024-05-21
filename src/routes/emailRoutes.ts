import { Router } from 'express';
import { sendEmailHandler } from '../controllers/emailControllers';

const router = Router();

router.post('/send', sendEmailHandler);

export default router;
