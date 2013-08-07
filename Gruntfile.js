'use strict';
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			build: {
				src: [
				'_assets/js/vendor/jquery-1.10.0.min.js',
				'_assets/js/vendor/picturefill.js',
				'_assets/js/vendor/responsive-nav.js',
				'_assets/js/module/*.js'
				],
				dest: '_assets/js/temp/main.js'
			}
		},
		coffee: {
			compile: {
				files: {
					'_assets/js/temp/coffee.js': ['_assets/js/coffee/*.coffee'] // compile and concat into single file
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
					'_/js/main.min.js': ['_assets/js/temp/main.js', '_assets/js/temp/coffee.js']
				}
			}
		},
		clean: ['_assets/js/temp'],
		watch: {
			js: {
				files: ['_assets/js/*/*.js', '_assets/js/coffee/*.coffee'],
				tasks: ['coffee','concat','uglify','clean'],
				spawn: true
			},
			css: {
        files: ['_assets/scss/*/*.scss','_assets/scss/*.scss'],
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
