/**
 * 配置sequelize，链接mysql
 */

const { Sequelize } = require('sequelize');
const { mysqlConfig } = require('../../config/index');
const { isPrd, isTest } = require('../../utils/env');

// 链接配置
const { host, user, password, port, database } = mysqlConfig;
const conf = {
  host,
  port,
  dialect: 'mysql',
};

// 测试环境不打印日志
if (isTest) {
  conf.logging = () => {}; // 默认是console.log
}

// 线上环境用，连接池
if (isPrd) {
  conf.pool = {
    max: 5, // 链接池中最大链接数量
    min: 0, // 链接池中最小链接数量
    idle: 10000, // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
  };
}

// 创建链接 (链接方式数据库)
const seq = new Sequelize(database, user, password, conf);

module.exports = seq;
