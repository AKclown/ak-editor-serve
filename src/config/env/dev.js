module.exports = {
    // mysql 链接配置
    mysqlConfig: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'imooc_lego_course'
    },

    // mongodb链接配置
    mongodbConfig: {
        host: 'localhost',
        port: '27017',
        dbName: 'imooc_lego_course'
    },

    // redis配置
    redisConfig: {
        port: '6379',
        host: '127.0.0.1'
    }
}