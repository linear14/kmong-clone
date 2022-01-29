import connection from '../models/db';
import { PoolConnection } from 'mysql2/promise';

const serviceService = {
  getServicesByCategoryIdx: async (categoryIdx: number) => {
    const conn: PoolConnection = await connection.getConnection();
    const query = `
      SELECT A.serviceIdx, A.title, A.isPackage, A.thumbnailUrl, A.leastPrice, C.userIdx, C.nickname, C.level, COUNT(B.reviewIdx) as rateCnt, AVG(B.rate) as rate 
      FROM SERVICE A 
      LEFT OUTER JOIN REVIEW B 
      ON A.serviceIdx = B.serviceIdx 
      JOIN USER C
      ON A.userIdx = C.userIdx
      WHERE A.categoryIdx = ?
      GROUP BY A.serviceIdx;`;

    try {
      const [row] = await conn.query(query, [categoryIdx]);
      return row;
    } catch (e) {
      return [];
    } finally {
      conn.release();
    }
  }
};

export default serviceService;