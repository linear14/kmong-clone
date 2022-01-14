import mysql2 from 'mysql2/promise';
import dbConfig from '../config/db.config';

const connection = mysql2.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  connectionLimit: 4,
  database: dbConfig.database
});

export default connection;
