import connection from '../models/db';
import { PoolConnection } from 'mysql2/promise';

const sampleService = {
  getSampleData: async () => {
    const conn: PoolConnection = await connection.getConnection();
    try {
      const [row] = await conn.query('SELECT * FROM USER');
      return row;
    } catch (e) {
      return [];
    } finally {
      conn.release();
    }
  }
};

export default sampleService;
