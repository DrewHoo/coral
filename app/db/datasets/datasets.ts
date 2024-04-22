import { eq } from 'drizzle-orm';
import { db } from '@/app/db/db';
import { datasets } from '@/app/db/datasets/datasets-schema';

export async function getDataset(name: string) {
    return await db.select().from(datasets).where(eq(datasets.name, name));
  }

  export async function createDataset(name: string, dataset: JSON) {
    return await db.insert(datasets).values({ name, dataset});
  }