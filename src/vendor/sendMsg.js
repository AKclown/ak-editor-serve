// 发送短信

// 发送短信验证码
async function sendVeriCodeMsg(phoneNumber, code, timeout = '') {
  if (!phoneNumber || !code)
    return Promise.reject(new Error('手机号或验证码为空'));
  // 模拟一个异步请求
  return Promise.resolve('ok');
}

module.exports = {
  sendVeriCodeMsg,
};
