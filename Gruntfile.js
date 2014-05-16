module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        markdown: {
            offline: {
                files: [{
                    expand: true,
                    src: 'html/*.md',
                    dest: 'out/',
                    ext: '.html'
                }],
                options: {
                    template: 'layout.html'
                }
            }
        }
    });

  grunt.loadNpmTasks('grunt-markdown');
};