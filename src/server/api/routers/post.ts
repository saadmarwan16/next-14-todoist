import { eq } from "drizzle-orm";
import { z } from "zod";
import { v4 } from "uuid";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { todos } from "~/server/db/schemas/todos";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // return ctx.db.todo?.create({
      //   title: input.title,
      //   timestamp: new Date()
      // });
      return ctx.db.insert(todos).values({title: input.title, id: v4()})
    }),

  delete: publicProcedure.input(z.object({id: z.string()})).mutation(async ({ctx, input}) => {
    // return ctx.db.todo?.findByIdAndDelete(input.id).exec();
    return ctx.db.delete(todos).where(eq(todos.id, input.id))
  }),

  getAll: publicProcedure.query(async ({ctx}) => {
    // return ctx.db.todo?.find({}).exec();
    return ctx.db.select().from(todos)
  }),

  // create: publicProcedure
  //   .input(z.object({ title: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.post.create({
  //       data: {
  //         title: input.title,
  //       },
  //     });
  //   }),

  // delete: publicProcedure.input(z.object({id: z.string()})).mutation(async ({ctx, input}) => {
  //   return ctx.db.post.delete({
  //     where: {
  //       id: input.id
  //     }
  //   })
  // }),
  // getAll: publicProcedure.query(({ctx}) => {
  //   return ctx.db.post.findMany();
  // }),
});
