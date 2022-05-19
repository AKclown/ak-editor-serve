const router = require('koa-router')();
const pkg = require('../../package.json');
const testMysqlConnect = require('../db/mysql2');
const { ENV } = require('../utils/env')
const { WorkContentModel } = require('../models/WorkContentModel')

router.get('/api/db-check', async (ctx, next) => {

    // 测试mysql链接
    const mysqlRes = await testMysqlConnect();

    // 测试mongodb 链接
    let mongodbConn
    try {
        mongodbConn = true;
        await WorkContentModel.findOne() 
    } catch (error) {
        mongodbConn = false;
    }

    ctx.body = {
        error: 0,
        data: {
            name: 'biz editor serve',
            version: pkg.version,
            ENV,
            mysqlConn: mysqlRes.length > 0,
            mongodbConn
        }
    }

})

module.exports = router
