import * as express from 'express';
import { Route, routes } from './routers';

const app = express();
const prefix = process.env.API_PREFIX;

app.use(express.json());

routes.forEach((route: Route) =>
  app.use(`/${prefix}/${route.path}`, route.router)
);

app.get(`/${prefix}`, (req, res) => {
  res.json({ message: 'Welcome to api!' });
});

export default app;
