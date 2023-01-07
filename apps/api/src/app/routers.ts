import { Router } from 'express';
import { router as CategoryRouter } from '@the-mean-blog/api/categories';
import { router as UserRouter } from '@the-mean-blog/api/users';

export interface Route {
  path: string;
  router: Router;
}

export const routes: Route[] = [
  {
    path: 'categories',
    router: CategoryRouter,
  },
  {
    path: 'users',
    router: UserRouter
  }
];
