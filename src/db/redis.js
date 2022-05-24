// 链接redis
const redis = require('redis');
const { redisConfig } = require('../config/index');

// 创建客户端
const { port, host, password } = redisConfig;

const opt = {};
if (password) {
  opt.password = password; // prd 环境需要密码
}

const redisClient = redis.createClient(port, host, opt);

redisClient.on('error', err => console.log('Redis Client Error', err));

// 测试链接是否成功
// redisClient.on('connect', () => {
//     console.log('redis connect success')

//     redisClient.set('foo', 'bar', redis.print) // => "Reply: OK"
//     redisClient.get('foo', redis.print) // => "Reply: bar"
//     redisClient.quit()
// })

module.exports = redisClient;
