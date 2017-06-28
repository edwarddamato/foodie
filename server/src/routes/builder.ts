import { RouteAction, Route } from '../routes/interfaces.d';
import * as express from 'express';

const buildRoutes = (app: express.Application, routes: Array<Route>): express.Application => {
  for (const route of routes) {
    buildRoute(app, route);
  }
  return app;
};
const buildRoute = (app: express.Application, { method, name, action }: Route): void => {
  (app as any)[method](name, action);
};

export { buildRoutes };