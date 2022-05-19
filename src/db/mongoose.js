/**
 * 封装 mongoose ，连接 mongodb
 */
const mongoose = require('mongoose');
const { mongodbConfig } = require('../config/index')

const { host, port, dbName, user, password } = mongodbConfig;

// 拼接连接字符串
let url = `mongodb://${host}:${port}` // dev 环境
if (user && password) {
    url = `mongodb://${user}:${password}@${host}:${port}` // prd 环境
}
// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify', false)

mongoose.set('autoIndex', true);


// 开始连接 (使用用户名和密码时，需要?authSource=admin)
mongoose.connect(`${url}/${dbName}?authSource=admin`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// 链接对象
const db = mongoose.connection;

db.on('error', err =>{
    console.error('mongoose connect error', err)
})

// db.once('open', () => {
//     // 用以测试数据库连接是否成功
//     console.log('mongoose connect success')
// })

module.exports = mongoose