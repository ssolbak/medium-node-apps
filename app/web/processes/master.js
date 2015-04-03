module.exports = function(cluster){


    // Create a worker per cpu
    var cpuCount = require('os').cpus().length;

    //for (var i = 0; i < cpuCount; ++i) {
    //    cluster.fork();
    //}

    // this is fixed in node 0.11 (SS), so for now, this hack lets you debug with multiple workers
    // see http://stackoverflow.com/questions/16840623/how-to-debug-node-js-child-forked-process
    var debugPort = getDebugPort(),
        inDebug = !!debugPort;

    var workerArgv = process.execArgv.concat();

    if(inDebug){
        cluster.setupMaster({
            execArgv: workerArgv
        });
        cpuCount=1;
    }

    console.log('creating', cpuCount, 'workers');

    for (var i = 0; i < cpuCount; ++i) {
        if (inDebug) {
            updateDebugPort(workerArgv, ++debugPort);
        }
        cluster.fork();
    }

    cluster.on('disconnect', function(worker) {
        //console.error('worker disconnected, starting new worker');
        if (inDebug) {
            updateDebugPort(workerArgv, ++debugPort);
        }
        cluster.fork();
    });

    function getDebugPort(){
        var args = process.execArgv;

        for(var i = 0; i < args.length; i ++){
            var arg = args[i];

            if(arg.indexOf('--debug-brk=') == 0){
                var port = parseInt(arg.replace('--debug-brk=', ''));
                return isNaN(port) ? null : port;
            }
        }
    }

    function updateDebugPort(args, value){
        for(var i = 0; i < args.length; i ++){
            if(args[i].indexOf('--debug-brk=') == 0){
                args[i] = '--debug-brk=' + value;
                return;
            }
        }
    }

};