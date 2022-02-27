'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.news.list);
  router.get('/user', controller.user.userInfo);
  router.get('/user/add', controller.user.add);
  router.get('/user/update', controller.user.update);
  router.get('/user/delete', controller.user.delete);

  app.router.resources('topics', '/api/v2/topics', app.controller.topics);

  // 鉴权成功后的回调页面
  router.get('/authCallback', controller.home.authCallback);

  // 渲染登录页面，用户输入账号密码
  router.get('/login', controller.home.login);
  // 登录校验
  router.post(
    '/login',
    app.passport.authenticate('local', { successRedirect: '/user' }),
  );
};
