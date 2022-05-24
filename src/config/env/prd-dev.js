// pro-dev的配置

const devConf = require('./dev');

// 修改redis链接配置
Object.assign(devConf.redisConfig, {
  // 和docker-compose中配置的service名字一致
  // 注意： 端口依旧是6379，而不是6378，后者为宿主机的端口
  host: 'editor-redis',
});

// 修改mysql链接配置
Object.assign(devConf.mysqlConfig, {
  // 和docker-compose中配置的service名字一致
  // 注意： 端口依旧是3306，而不是3305，后者为宿主机的端口
  host: 'editor-mysql',
});

// 修改mongodbConfig链接配置
Object.assign(devConf.mongodbConfig, {
  // 和docker-compose中配置的service名字一致
  // 注意： 端口依旧是27017，而不是27016，后者为宿主机的端口
  host: 'editor-mongo',
});

module.exports = devConf;
