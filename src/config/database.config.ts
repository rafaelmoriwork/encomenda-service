import 'reflect-metadata';
import 'dotenv/config';

import { DataSource, type DataSourceOptions } from 'typeorm';
import { join } from 'node:path';

export const databaseOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [
    join(import.meta.dirname, '../**/*.entity{.ts,.js}'),
  ],

  migrations: [
    join(import.meta.dirname, '../database/migrations/*{.ts,.js}'),
  ],

  synchronize: false,
  migrationsRun: false,
};

export default new DataSource(databaseOptions);