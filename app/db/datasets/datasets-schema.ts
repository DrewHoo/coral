import { pgTable, serial, json, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const datasets = pgTable(
    'datasets',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        dataset: json('json').notNull(),
        createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (datasets) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(datasets.name),
        };
    },
);