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

  exports.news = {
    pageSize: 10,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  exports.mysql = {
    enable: true,
    package: 'egg-mysql',
  };

  return {
    ...config,
    ...userConfig,
  };
};
