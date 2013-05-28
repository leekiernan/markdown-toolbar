'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: [
        '_/script/js/vendor/jquery-1.10.0.min.js',
        '_/script/js/vendor/picturefill.js',
        '_/script/js/module/*.js'
        ],
        dest: '_/script/js/temp/main.js'
      }
    },
    coffee: {
      compile: {
        files: {
          '_/script/js/temp/coffee.js': ['_/script/js/coffee/*.coffee'] // compile and concat into single file
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          '_/script/js/main.min.js': ['_/script/js/temp/main.js', '_/script/js/temp/coffee.js']
        }
      }
    },
    clean: ['_/script/js/temp'],
    regarde: {
      js: {
        files: ['_/script/js/*/*.js', '_/script/js/coffee/*.coffee'],
        tasks: ['coffee','concat','uglify','clean'],
        spawn: true
      },
      css: {
        files: ['_/css/scss/*/*.scss','_/css/scss/*.scss'],
        tasks: ['compass'],
        spawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', [
    'coffee',
    'concat',
    'uglify',
    'compass',
    'clean',
    'regarde'
    ]);
};