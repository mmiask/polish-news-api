import { Router, Request, Response, NextFunction } from 'express';
import mock from './mockData.json';

const router = Router();

interface Source {
  name: string,
  id: number,
  categories: string[],
  url: string
} 

const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sources: Source[] = mock;
    const source = sources.find(source => source.id === Number(req.params.id));
    if (!source) {
      const err = new Error('Player stats not found') as any;
      err.status = 404;
      throw err;
    }
    res.json(source);
  } catch (e) {
    next(e);
  }
};

router
  .route('/api/v1/sources/:id')
  .get(getStats);

export default router;