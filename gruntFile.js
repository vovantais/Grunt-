module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			js: {
				src: ['js/*.js'],
				dest: 'build/script.js'
			},
			css: {
				src: ['css/*.css'],
				dest: 'build/styles.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('concat-js', ['concat:js']);

	grunt.registerTask('concat-css', ['concat:css']);

	grunt.registerTask('run', function() {
		console.log('I run the project!');
	});

}