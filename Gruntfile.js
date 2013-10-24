'use strict';
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			build: {
				src: [
				'assets/_js/vendor/jquery-1.10.0.min.js',
				'assets/_js/vendor/picturefill.js',
				'assets/_js/vendor/responsive-nav.js',
				'assets/_js/module/*.js'
				],
				dest: 'assets/_js/temp/main.js'
			}
		},
		coffee: {
			compile: {
				files: {
					'assets/_js/temp/coffee.js': ['assets/_js/coffee/*.coffee'] // compile and concat into single file
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
					'assets/js/main.min.js': ['assets/_js/temp/main.js', 'assets/_js/temp/coffee.js']
				}
			}
		},
		clean: ['assets/_js/temp'],
		watch: {
			js: {
				files: ['assets/_js/*/*.js', 'assets/_js/coffee/*.coffee'],
				tasks: ['coffee','concat','uglify','clean'],
				spawn: true
			},
			css: {
        files: ['assets/_scss/*/*.scss','assets/_scss/*.scss'],
				tasks: ['compass'],
				spawn: true
			}
		}
	});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', [
    'coffee',
    'concat',
    'uglify',
    'compass',
    'clean'
  ]);
};
