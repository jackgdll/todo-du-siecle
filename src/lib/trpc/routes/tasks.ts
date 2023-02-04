import prisma from '$lib/prisma';
import { auth } from '$lib/trpc/middleware/auth';
import { logger } from '$lib/trpc/middleware/logger';
import { t } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const taskSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3),
  description: z.string().max(1000),
  completed: z.boolean().default(false),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  due: z
    .date()
    .transform((d) => d.toDateString())
    .nullable(),
  createdAt: z.date().transform((d) => d.toDateString()),
  updatedAt: z.date().transform((d) => d.toDateString()),
});
export type TaskOutput = z.infer<typeof taskSchema>;

export const tasks = t.router({
  create: t.procedure
    .use(logger)
    .use(auth)
    .input(
      taskSchema
        .pick({
          title: true,
          description: true,
        })
        .extend({
          due: z.coerce.date().nullable(),
          priority: taskSchema.shape.priority.default('LOW'),
        }),
    )
    .output(taskSchema.nullable())
    .mutation(async ({ ctx, input }) => {
      return prisma.task.create({
        data: {
          ...input,
          authorEmail: ctx.session.user.email,
        },
      });
    }),
  all: t.procedure
    .use(logger)
    .use(auth)
    .output(taskSchema.array())
    .query(async ({ ctx }) => {
      return prisma.task.findMany({
        where: {
          authorEmail: ctx.session.user.email,
        },
        orderBy: [{ completed: 'asc' }, { priority: 'desc' }, { due: 'asc' }],
      });
    }),
  update: t.procedure
    .use(logger)
    .use(auth)
    .input(
      taskSchema
        .pick({
          title: true,
          description: true,
          priority: true,
          completed: true,
        })
        .extend({
          due: z.coerce.date().nullable(),
        })
        .partial()
        .extend({
          id: taskSchema.shape.id,
        }),
    )
    .output(taskSchema.nullable())
    .mutation(async ({ ctx, input }) => {
      const task = await prisma.task.findFirst({
        where: { id: input.id, authorEmail: ctx.session.user.email },
        select: {},
      });
      if (!task) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Task not found',
        });
      }
      return prisma.task.update({
        where: { id: input.id },
        data: input,
      });
    }),
  delete: t.procedure
    .use(logger)
    .use(auth)
    .input(taskSchema.shape.id)
    .output(z.boolean())
    .mutation(async ({ ctx, input }) => {
      const task = await prisma.task.findFirst({
        where: { id: input, authorEmail: ctx.session.user.email },
        select: {},
      });
      if (!task) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Task not found',
        });
      }
      return prisma.task
        .delete({ where: { id: input } })
        .then(() => true)
        .catch(() => false);
    }),
});
