import { task } from '../lib/server/db/schema';

export type User = Database.user;
export type Sprint = Database.sprint;
export type Task = task.$inferSelect;
