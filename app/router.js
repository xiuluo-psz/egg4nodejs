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
};
