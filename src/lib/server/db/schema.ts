import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age')
});

export const sprint = sqliteTable('sprint', {
	id: integer('id').primaryKey(),
	name: text('name'),
	user_id: integer('user_id').references(() => user.id),
	created_at: text('created_at'),
	updated_at: text('updated_at')
});

export const task = sqliteTable('task', {
	id: integer('id').primaryKey(),
	name: text('name'),
	sprint_id: integer('sprint_id').references(() => sprint.id),
	created_at: text('created_at'),
	updated_at: text('updated_at')
});