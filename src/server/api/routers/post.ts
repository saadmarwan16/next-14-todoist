import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
        },
      });
    }),

  delete: publicProcedure.input(z.object({id: z.string()})).mutation(async ({ctx, input}) => {
    return ctx.db.post.delete({
      where: {
        id: input.id
      }
    })
  }),
  getAll: publicProcedure.query(({ctx}) => {
    return ctx.db.post.findMany();
  }),
});
