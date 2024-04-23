import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as UsersSchema from "./users/users-schema"
import * as DataSetsSchema from "./datasets/datasets-schema"

export const db = drizzle(sql, { schema: { ...UsersSchema, ...DataSetsSchema } });

