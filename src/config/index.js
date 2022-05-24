/**
 * 处理环境变量加载不同的文件
 */
const { isPrd, isPrdDev } = require('../utils/env');

// 获取各个环境不同的配置文件
let fileName = 'dev.js';

if (isPrdDev) fileName = 'prd-dev.js';
if (isPrd) fileName = 'prd.js';

const conf = require(`./env/${fileName}`);

module.exports = conf;
