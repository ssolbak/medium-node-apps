module.exports = function(cluster, config, port, dirName){

    var app = require("./bootstrap");

    app.server.listen(port, function() {
        console.log('Express app started on port ' + port);
    });
};