import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as UsersSchema from "./users/users-schema"

export const db = drizzle(sql, { schema: { ...UsersSchema } });

