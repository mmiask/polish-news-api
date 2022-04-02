import express from 'express';
import { getSource } from '../handlers/sources';
const router = express.Router();

router.get('/api/v1/sources/:id', getSource);

export default router;