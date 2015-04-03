//require('newrelic');

var cluster = require('cluster'),
    env = process.env.NODE_ENV || 'local',
    config = require('./config/config')[env];

var port = process.env.PORT || 3000;

if (env == 'local') {
    require('./processes/worker')(cluster, config, port, __dirname);
} else {
    if (cluster.isMaster) {
        console.log("master is running on env", env, 'port', port);
        require('./processes/master')(cluster, config);
    } else {
        console.log("worker is running on env", env, 'port', port);
        require('./processes/worker')(cluster, config, port, __dirname);
    }
}

