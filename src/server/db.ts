// import { PrismaClient } from "@prisma/client";
import { type ReturnModelType, getModelForClass, mongoose } from "@typegoose/typegoose";
import type { BeAnObject } from "@typegoose/typegoose/lib/types";

import { env } from "~/env";
import { Todo } from "~/lib/todo";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

const globalForTypegoose = globalThis as unknown as {
  mongoose: {
    models: {
      Todo: ReturnModelType<typeof Todo, BeAnObject> | undefined;
    }
  },
}

export const typeDb = globalForTypegoose.mongoose?.models?.Todo ?? getModelForClass(Todo);
// export const typeDb = (mongoose.models.Todo as ReturnModelType<typeof Todo, BeAnObject> | undefined ?? getModelForClass(Todo)) as ReturnModelType<typeof Todo, BeAnObject>;

// export const db =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log:
//       env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
//   });

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

if (env.NODE_ENV !== 'production' && globalForTypegoose.mongoose) globalForTypegoose.mongoose.models.Todo = typeDb;