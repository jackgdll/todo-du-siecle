import prisma from '$lib/prisma';
import { auth } from '$lib/trpc/middleware/auth';
import { logger } from '$lib/trpc/middleware/logger';
import { t } from '$lib/trpc/t';
import { Priority } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const taskSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3),
  description: z.string().max(1000),
  completed: z.boolean().default(false),
  priority: z.nativeEnum(Priority),
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
          priority: taskSchema.shape.priority.default(Priority.LOW),
        }),
    )
    .output(taskSchema.nullable())
    .mutation(({ ctx, input }) => {
      if (!input) {
        return null;
      }
      return prisma.task.create({
        data: {
          ...input,
          authorEmail: ctx.session?.user?.email ?? '',
        },
      });
    }),
  all: t.procedure
    .use(logger)
    .use(auth)
    .output(taskSchema.array())
    .query(({ ctx }) => {
      return prisma.task.findMany({
        where: {
          authorEmail: ctx.session?.user?.email ?? '',
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
      const task = await prisma.task.findUnique({
        where: { id: input.id },
        select: {
          authorEmail: true,
        },
      });
      if (!task || task.authorEmail !== ctx.session?.user?.email) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You are not allowed to update this task',
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
      const task = await prisma.task.findUnique({
        where: { id: input },
        select: {
          authorEmail: true,
        },
      });
      if (!task || task.authorEmail !== ctx.session?.user?.email) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You are not allowed to delete this task',
        });
      }
      return prisma.task
        .delete({ where: { id: input } })
        .then(() => true)
        .catch(() => false);
    }),
});
