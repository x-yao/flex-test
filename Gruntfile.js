module.exports = function(grunt) {
	var autoprefixer = require('autoprefixer-core');
	grunt.initConfig({
		watch: {
			options: {
				livereload: false
			},
			dist: {
				files: [
					'css/input.css'
				],
				tasks: ['postcss']
			}
		},
		postcss: {
			options: {
				processors: [
					autoprefixer({
						browsers: ['> 0%', 'last 2 versions']
					}).postcss
				]
			},
			dist: {
				src: 'css/input.css',
				dest: 'css/output.css'
			}
		},
		ttf2woff: {
	        default: {
	            src: ['fonts/*.ttf'],
	            dest: 'fonts/'
	        }
    	},
    	ttf2eot: {
		   default: {
		     src: 'fonts/*.ttf',
		     dest: 'fonts/'
		   }
  		}

	});
	grunt.loadNpmTasks('grunt-ttf2eot');
	grunt.loadNpmTasks('grunt-ttf2woff');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['postcss']);
	grunt.registerTask('css', ['postcss','watch']);
	grunt.registerTask('fonts', ['ttf2woff','ttf2eot']);

};