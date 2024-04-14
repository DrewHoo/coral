import { eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { db } from '@/app/db/db';
import { users } from '@/app/db/users/users-schema';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle


export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(users).values({ email, password: hash });
}