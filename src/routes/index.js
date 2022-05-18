const router = require('koa-router')();
const pkg = require('../../package.json');
const testMysqlConnect = require('../db/mysql2');

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })


router.get('/api/db-check', async (ctx, next) => {
    const mysqlRes = await testMysqlConnect();
    ctx.body = {
        error: 0,
        data: {
            name: 'biz editor serve',
            version: pkg.version,
            mysqlConn: mysqlRes.length > 0
        }
    }

})

module.exports = router
