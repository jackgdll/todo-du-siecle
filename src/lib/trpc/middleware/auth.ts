import { t } from '$lib/trpc/t';
import type { DefaultSession } from '@auth/core/types';
import { TRPCError } from '@trpc/server';

export const auth = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user?.email) throw new TRPCError({ code: 'UNAUTHORIZED' });

  return next({
    ctx: {
      ...ctx,
      session: {
        ...ctx.session,
        user: ctx.session.user as Omit<DefaultSession['user'], 'email'> & { email: string },
      },
    },
  });
});
