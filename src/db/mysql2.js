/**
 * 数据库连接测试
 */

const mysql = require('mysql2/promise');
const { mysqlConfig } = require('../config/env/dev')

async function testMysqlConnect() {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] =await connection.execute('SELECT now();');
    return rows;
}

// 直接执行node src/db/mysql2.js进行测试
// (async () => {
//     try {
//         const rows = await testMysqlConnect();
//         console.log('rows: ', rows);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// })()

module.exports = testMysqlConnect;