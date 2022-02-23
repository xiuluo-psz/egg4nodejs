'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // select
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('user', { uid })
        const allUser = await this.app.mysql.select('user');
        return { user, allUser };
    };
    // insert
    async add() {
        const result = await this.app.mysql.insert('user', { uid: Math.random(), name: 'egg', age: 24, sex: '1' });
        return result
    };
    // update
    async update() {
        const row = { uid: '0.2473165631340719', name: 'eggup', age: 24, sex: '2' }
        const options = {
            where: {
                uid: '0.2473165631340719'
            }
        };
        const result = await this.app.mysql.update('user', row, options);
        return result
    };
    // delete
    async delete() {
        const row = { uid: '0.6645758734264844' }
        const result = await this.app.mysql.delete('user', row);
        return result
    }
}

module.exports = UserService;