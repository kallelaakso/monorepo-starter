import { z } from "zod";
import { createRouter } from "@/pages/api/trpc/[trpc]";

export const categoryRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return ctx.category.findMany({
        orderBy: {
          createdAt: "asc",
        },
      });
    },
  })
  .mutation("add", {
    input: z.object({
      id: z.string().optional(),
      name: z.string().min(1),
    }),
    async resolve({ ctx, input }) {
      const category = await ctx.category.create({
        data: input,
      });
      return category;
    },
  })
  .mutation("edit", {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        name: z.string().min(1).optional(),
      }),
    }),
    async resolve({ ctx, input }) {
      const { id, data } = input;
      const category = await ctx.category.update({
        where: { id },
        data,
      });
      return category;
    },
  })
  .mutation("delete", {
    input: z.string().uuid(),
    async resolve({ input: id, ctx }) {
      await ctx.category.delete({ where: { id } });
      return id;
    },
  });
