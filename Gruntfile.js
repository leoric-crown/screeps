module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');
    var config = require('./.screeps.json');
    var branch = grunt.option('branch');
    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                token: config.token,
                branch: branch,
                //server: 'season'
            },
            dist: {
                src: [`dist/${branch}/*.js`]
            }
        }
    });
}
