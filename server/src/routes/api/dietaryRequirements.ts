import { Route } from '../../types/routes';
import { Request, Response } from 'express';
import {
  VegeterianRequirement,
  DairyFreeRequirement,
  GlutenFreeRequirement,
  EggFreeRequirement,
  VeganRequirement,
  NutFreeRequirement } from '../../types/meals';

const route: Route = {
  method: 'get',
  name: '/api/dietaryrequirements',
  action: async (req: Request, res: Response): Promise<void> => {    
    try {
      res.send({ dietaryRequirements: [
        VeganRequirement,
        VegeterianRequirement,
        DairyFreeRequirement,
        GlutenFreeRequirement,
        EggFreeRequirement,
        NutFreeRequirement
      ] });
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export default route;