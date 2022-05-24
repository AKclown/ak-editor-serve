const router = require('koa-router')();

// 中间件
const genValidator = require('../middlewares/genValidator');
const {
  phoneNumberSchema,
} = require('../validator/users');

// controller
const sendVeriCode = require('../controller/users/sendVeriCode');

// 发送验证码
router.post('/genVeriCode', genValidator(phoneNumberSchema), async ctx => {
  const { phoneNumber, isRemoteTest } = ctx.request.body;
  // 尝试发送验证码
  const res = await sendVeriCode(phoneNumber, isRemoteTest);
  ctx.body = res;
})

module.exports = router;
