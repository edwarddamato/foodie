import express from 'express';
import { json, urlencoded } from 'body-parser';
import { buildRoutes } from './routes/builder';
import apiUser from './routes/api/user';

const app: express.Application = express();

buildRoutes(app, [apiUser])
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    next();
  })
  .use(json())
  .use(urlencoded({ extended: true }))
  .listen(4000, () => {
    console.log('Node server listening on http://localhost:4000');
  });