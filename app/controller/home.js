'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async authCallback() {
    this.ctx.body = 'success'
  }
  async login() {
    await this.ctx.render('login/login.tpl');
  }
}

module.exports = HomeController;
