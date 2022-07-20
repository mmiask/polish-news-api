import express from 'express';
import { getSource, listSources } from '../handlers/sources';
const router = express.Router();

router.get('/api/v1/sources/:id', getSource);
router.get('/api/v1/sources', listSources);


export default router;