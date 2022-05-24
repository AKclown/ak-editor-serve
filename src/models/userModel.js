const seq = require('../db/seq/seq');
const { STRING, DATE, BOOLEAN } = require('../db/seq/types');

// model会自动添加 管理createdAt、updatedAt、id (这是sequelize触发的，如果单纯通过sql语句不会触发自动更新这些字段)
const User = seq.define(
  'user',
  {
    username: {
      type: STRING,
      allowNull: false,
      unique: 'username', // 不要用 unique: true, https://www.chaoswork.cn/1064.html
      comment: '用户名，唯一',
    },
    password: {
      type: STRING,
      allowNull: false,
      comment: '密码',
    },
    phoneNumber: {
      type: STRING,
      allowNull: false,
      unique: 'username',
      comment: '手机号，唯一',
    },
    nickName: {
      type: STRING,
      comment: '昵称',
    },
    gender: {
      type: STRING,
      allowNull: false,
      defaultValue: 0,
      comment: '性别（1 男性，2 女性，0 保密）',
    },
    picture: {
      type: STRING,
      comment: '头像，图片地址',
    },
    city: {
      type: STRING,
      comment: '城市',
    },
    latestLoginAt: {
      type: DATE,
      defaultValue: null,
      comment: '最后登录时间',
    },
    isFrozen: {
      type: BOOLEAN,
      defaultValue: false,
      comment: '用户是否冻结',
    },
  },
  {
    // // 停止表名自动复数化
    // freezeTableName: true,
    // // 直接提供表名称
    // tableName: "user",
  }
);

/**
 * 1. User.build 创建实例
 * 2. instance.save 将数据保存到数据库中
 * 3. User.create 创建并且保存实例  User.build和instance.save的合体
 */
module.exports = User;
