import { Injectable } from '@nestjs/common';
import { join } from 'node:path';
import type { DataSourceOptions } from 'typeorm';
import DatabaseConnection from '../database-connection.js';

@Injectable()
export default class MainDatabaseConnection extends DatabaseConnection {
  protected getDataSourceOptions(): DataSourceOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,

      entities: [join(import.meta.dirname, '../../**/*.entity{.ts,.js}')],

      migrations: [join(import.meta.dirname, './migrations/*{.ts,.js}')],

      synchronize: false,
      migrationsRun: false,
    };
  }
}
