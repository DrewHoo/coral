import { pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const users = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        email: text('email').notNull(),
        password: varchar('password', { length: 64 }).notNull(),
        createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(users.email),
        };
    },
);