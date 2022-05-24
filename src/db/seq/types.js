/**
 * 封装 sequelize 类型，参考 https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/data-types.md
 */

const { DataTypes } = require('sequelize'); // 导入内置数据类型

module.exports = {
  STRING: DataTypes.STRING, // VARCHAR(255)
  TEXT: DataTypes.TEXT, // TEXT
  INTEGER: DataTypes.INTEGER,
  BOOLEAN: DataTypes.BOOLEAN,
  DATE: DataTypes.DATE,
};
