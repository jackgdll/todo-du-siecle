import { t } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';

export const auth = t.middleware(async ({ next, ctx }) => {
  if (!ctx.session?.user?.email) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return next();
});
