import { Route } from '../interfaces.d';
import { Request, Response } from 'express';

const route: Route = {
  method: 'get',
  name: '/api/user',
  action: async (req: Request, res: Response): Promise<void> => {    
    try {
      const fetchResults = { results: [1,2,3] }
      res.send(fetchResults);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export default route;