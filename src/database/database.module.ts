import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import MainDatabaseConnection from './main/main-database.connection.js';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MainDatabaseConnection,
    }),
  ],
})
export default class DatabaseModule {}
