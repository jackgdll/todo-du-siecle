import { tasks } from './routes/tasks';
import { t } from './t';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export const router = t.router({
  tasks,
});

export type Router = typeof router;

export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
