var cluster = require('cluster');
var domain = require('domain');
var ExceptionHandler = require('./exception')();

var domainMiddleware = module.exports = function(app) {

    return function (req, res, next) {

        var reqDomain = domain.create();
        reqDomain.id = domainMiddleware.id(req);
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.on('error', function (err) {

            try {
                var killtimer = setTimeout(function () {
                    process.exit(1);
                }, 30000);

                // But don't keep the process open just for that!
                killtimer.unref();

                app.server.close();

                // Let the master know we're dead.  This will trigger a
                // 'disconnect' in the cluster master, and then it will fork
                // a new worker.
                if (cluster.worker) cluster.worker.disconnect();

                ExceptionHandler(err, req, res);

            } catch (e) {
                console.log('in major trouble', e);
            }

        });

        reqDomain.run(next);
    };
};

var count = 0;
domainMiddleware.id = function(req) {
    return new Date().getTime() + (count++);
};