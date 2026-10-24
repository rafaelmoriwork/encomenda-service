import 'reflect-metadata';
import 'dotenv/config';

import MainDatabaseConnection from './main-database.connection.js';

export default new MainDatabaseConnection().createDataSource();
