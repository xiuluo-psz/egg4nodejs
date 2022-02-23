'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async userInfo() {
        const ctx = this.ctx;
        const userId = ctx.query.id;
        ctx.body = await ctx.service.user.find(userId)
    };
    async add() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.add();
    };
    async update() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.update();
    };
    async delete() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.delete();
    }
}

module.exports = UserController;