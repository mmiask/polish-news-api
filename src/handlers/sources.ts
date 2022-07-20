import { Request, Response, NextFunction } from 'express';
import mock from '../../mockData.json';

interface Source {
  name: string,
  id: number,
  categories: string[],
  url: string
} 

export function getSource(req: Request, res: Response, next: NextFunction): void {
  try {
    const sources: Source[] = mock;
    const source = sources.find(source => source.id === Number(req.params.id));
    if (!source) {
      res.status(404).send('Source not found');
    }
    res.send(source);
  } catch (e) {
    next(e);
  }
}

export function listSources(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send('test2');
}
