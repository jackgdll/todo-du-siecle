import type { ParamMatcher } from '@sveltejs/kit';
import { z } from 'zod';

export const tasksParamSchema = z
  .literal('new')
  .transform(() => ({
    mode: 'new',
    id: null,
  }))
  .or(
    z
      .string()
      .regex(/^edit\/.*$/)
      .transform((p) => {
        const [, id] = p.split('/');
        return {
          mode: 'edit',
          id,
        };
      }),
  )
  .or(z.literal('').transform(() => null));

export const match = ((param) => {
  return tasksParamSchema.safeParse(param).success;
}) satisfies ParamMatcher;
