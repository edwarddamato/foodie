import { Route } from '../../types/routes';
import { Request, Response } from 'express';
import { meals } from '../../../data/meals'

const route: Route = {
  method: 'get',
  name: '/api/meals',
  action: async (req: Request, res: Response): Promise<void> => {    
    try {
      const fetchResults = await { meals }
      res.send(fetchResults);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export default route;