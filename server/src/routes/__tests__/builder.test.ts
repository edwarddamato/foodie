import express from 'express';
import { buildRoutes } from '../builder';
import apiUser from '../../routes/api/user';

describe('buildRoutes', () => {
  it('should apply the given route on the express application', () => {
    const app: express.Application = express();
    app.get = jest.fn();

    buildRoutes(app, [apiUser]);

    expect(app.get).toHaveBeenCalledTimes(1);
    expect(app.get).toHaveBeenCalledWith(apiUser.name, apiUser.action);
  });
});