const LocalStrategy = require('passport-local').Strategy;

module.exports = (app) => {
    app.beforeStart(async () => {
        // 从配置中心获取 MySQL 的配置
        // const mysqlConfig = await app.configCenter.fetch('mysql');
        // app.database = app.mysql.createInstance(mysqlConfig);
      });
    // 挂载 strategy
    app.passport.use(
        new LocalStrategy(
            { passReqToCallback: true, },
            (req, username, password, done) => {
                // format user
                const user = {
                    provider: 'local',
                    username,
                    password,
                };
                // debug('%s %s get user: %j', req.method, req.url, user);
                app.passport.doVerify(req, user, done);
            },
        ),
    );

    // 处理用户信息，需要自定义处理
    app.passport.verify(async (ctx, user) => { return true });
    app.passport.serializeUser(async (ctx, user) => { });
    app.passport.deserializeUser(async (ctx, user) => { });
};