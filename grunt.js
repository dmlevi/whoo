/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'js/main.js']
    },
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'public/global.js'
      }
    },
    min: {
      js: {
        src: ['js/*.js'],
        dest: 'public/global.min.js'
      }
    },
    mincss: {
        compress: {
          files: {
            "public/global.min.css": ["css/**/*.css"]
          }
        }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-contrib-mincss');
  // Default task.
  grunt.registerTask('default', 'mincss lint concat min');

};
