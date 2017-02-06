module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: ['bower.json', 'package.json', 'Gruntfile.js', 'app/**/*.js', 'app/**/*.css', 'app/**/*.html']
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: 'app',
                    keepalive: true,
                    // hostname: '127.0.0.1',
                    livereload: true,
                    middleware: function(connect) {
                        return [
                            connect.static('app'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            )
                        ];
                    }
                }
            }
        },
        concurrent: {
            dev: ['connect:dev', 'watch:dev'] // connect and watch running concurrently!
        }
    });

    grunt.registerTask('default', [
        'concurrent',
    ]);

};
