/**
 * 数据链接测试
 */

const seq = require("../seq");

// 测试链接 （是否成功），直接运行node src/db/seq/utils/conn-test.js
seq
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("fail");
  })
  .finally(() => {
    seq.close();
  });
