// 短信验证码 - 缓存

const { cacheSet, cacheGet } = require('../index');

// cache key前缀 重要!!! 否则数据容易混乱
const PREFIX = 'phoneVeriCode-';

// 从缓存获取验证码
async function getVeriCodeFromCache(phoneNumber) {
  const key = `${PREFIX}${phoneNumber}`;
  const code = await cacheGet(key);
  if (code == null) return code;
  return code.toString(); // cacheGet 方法中有 JSON.parse
}

// 缓存验证码
async function setVeriCodeToCache(phoneNumber, veriCode, timeout) {
  const key = `${PREFIX}${phoneNumber}`;
  cacheSet(key, veriCode, timeout);
}

module.exports = {
  getVeriCodeFromCache,
  setVeriCodeToCache,
};
