module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
		          expand: true,
		          cwd: 'styles',
		          src: ['*.scss'],
		          dest: '../public',
		          ext: '.css'
		        }]
			}
		},
		watch: {
			sass: {
				files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass'); /* requres gem install sass */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',[ 'sass:dist' /*, 'watch'*/]);
}
