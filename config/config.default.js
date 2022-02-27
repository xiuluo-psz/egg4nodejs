/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * 默认配置
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645493001300_180';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // mysql
  config.mysql = {
    client: {
      // host
      host: '8.141.58.82',
      // 端口号
      port: '3306',
      // 用户名
      user: 'admin',
      // 密码
      password: 'admin',
      // 数据库名
      database: 'mytest',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.middleware = ['errorHandler'];
  config.errorHandler = { match: '/api' }

  exports.news = {
    pageSize: 10,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
