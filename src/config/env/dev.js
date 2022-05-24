module.exports = {
  // mysql 链接配置
  mysqlConfig: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'imooc_lego_course',
  },

  // mongodb链接配置
  mongodbConfig: {
    host: 'localhost',
    port: '27017',
    dbName: 'imooc_lego_course',
  },

  // redis配置
  redisConfig: {
    port: '6379',
    host: '127.0.0.1',
  },

  // jwt 过期时间
  jwtExpiresIn: '1d', // 1. 字符串，如 '1h' '2d'； 2. 数字，单位是 s

  // cors origin
  corsOrigin: '*',

  // 短信验证码缓存时间，单位 s
  msgVeriCodeTimeout: 2 * 60,
};
