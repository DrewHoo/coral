import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { db } from './db';
// This will run migrations on the database, skipping the ones already applied
export async function run() {
    await migrate(db, { migrationsFolder: './drizzle' });
}
