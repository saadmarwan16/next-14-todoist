import { sql } from "drizzle-orm";
import { text, sqliteTable,  } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable('todos', {
  id: text('id').notNull().primaryKey(),
  title: text('title').notNull(),
  timestamp: text('timestamp').default(sql`CURRENT_TIMESTAMP`).notNull()
});