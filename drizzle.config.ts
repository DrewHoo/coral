import { sql, postgresConnectionString } from '@vercel/postgres';
import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: ['./app/db/users/users-schema.ts','./app/db/datasets/datasets-schema.ts'],
    out: './drizzle',
    driver: 'pg',
    dbCredentials: { connectionString: postgresConnectionString("direct") as string },
} satisfies Config;