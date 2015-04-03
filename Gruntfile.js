module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        mochaTest: {
            unitTest: {
                options: {
                    reporter: 'spec'
                },
                src: [
                    'app/**/*.test.js'
                ]
            }
        },

        symlink: {
            node_module_link: {
                files: [
                    { src: 'app/modules', dest: 'node_modules/~' }
                ]
            }
        },

        //minify the JS file to be as small as possible
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('test', ['mochaTest:unitTest']);

    grunt.registerTask('link', ['symlink']);

    grunt.registerTask('setup', 'install the backend and frontend dependencies', function() {

        grunt.task.run('link');

        var async = require('async');
        var exec = require('child_process').exec;
        var done = this.async();

        var runCmd = function(item, callback) {
            process.stdout.write('running "' + item + '"...\n');
            var cmd = exec(item);
            cmd.stdout.on('data', function (data) {
                grunt.log.writeln(data);
            });
            cmd.stderr.on('data', function (data) {
                grunt.log.errorlns(data);
            });
            cmd.on('exit', function (code) {
                if (code !== 0) throw new Error(item + ' failed');
                grunt.log.writeln('done\n');
                callback();
            });
        };

        async.series({
                npm: function(callback){
                    runCmd('npm install', callback);
                },
                bower: function(callback){
                    runCmd('bower install', callback);
                }
            },
            function(err, results) {
                if (err) done(false);
                //grunt.task.run('copy:setup');
                done();
            });
    });

};