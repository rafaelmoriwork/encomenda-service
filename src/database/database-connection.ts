import type {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { DataSource, type DataSourceOptions } from 'typeorm';

export default abstract class DatabaseConnection implements TypeOrmOptionsFactory {
  protected abstract getDataSourceOptions(): DataSourceOptions;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return this.getDataSourceOptions();
  }

  public createDataSource(): DataSource {
    return new DataSource(this.getDataSourceOptions());
  }
}
