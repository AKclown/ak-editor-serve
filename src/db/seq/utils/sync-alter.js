/**
 * 同步数据库，以修改数据表的方式，不会清空数据，比较安全
 */
const path = require('path');
const simpleGit = require('simple-git');
const seq = require('../seq');
const { isDev } = require('../../../utils/env');

// 获取所有的 seq model
require('require-all')({
  dirname: path.resolve('src', 'models'), // src/models 中可能会有 mongoose 的 model ，不过这里获取了也没关系
  filter: /\.js$/,
  excludeDirs: /^\.(git|svn)$/,
  recursive: true, // 递归
});

// 同步数据表
async function syncDb() {
  // 决定是否需要同步数据库
  let needToSyncDb = true;
  // 只适用于开发环境！！！
  if (isDev) {
    /**
     * 开发环境下，修改频繁，每次重启都需要同步数据表，消耗太大
     * 所以，开发环境下，判断是否修改了src/models中的内容
     * 如果是，则同步数据表。否则，不用同步数据表
     */
    const git = simpleGit();
    const {
      modified,
      not_added: nodeAdded,
      created,
      deleted,
      renamed,
    } = await git.status();
    const fileChanged = modified
      .concat(nodeAdded)
      .concat(created)
      .concat(deleted)
      .concat(renamed);

    if (fileChanged.length) {
      // 说明git status有改动

      // 是否改动了 db相关的文件
      const changeDbFiles = fileChanged.some(f => {
        // 改动了 src/models ，需要同步数据库
        if (f.indexOf('src/models/') === 0) return true;
        // 改动了 src/db/seq ，需要同步数据库
        if (f.indexOf('src/db/seq/') === 0) return true;
        // 其他情况，不同步
        return false;
      });
      // 没改动 db 文件，则不需要同步
      if (!changeDbFiles) needToSyncDb = false;
      console.log('needToSyncDb: ', needToSyncDb);
    }

    // 如果 git status 没有改动，则照常同步数据表，重要！！！
  }

  if (needToSyncDb) {
    // 设置在sequelize实例上是一次性同步，如果设置model上 就是同步某个model
    // alter参数，将检查数据库中表的当前状态(他具有那些列，他们的数据类型等)然后进行必要的更改以使其与模型匹配
    // force 就是将创建的表，删除重新创建
    // https://www.sequelize.com.cn/core-concepts/model-basics
    await seq.sync({ alter: true });
  }
}

module.exports = syncDb;
