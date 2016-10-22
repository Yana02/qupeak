module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/css/main.css' : 'app/sass/main.scss'
        }
      },
      options: {
        includePaths: [
          './bower_components/css-calc-mixin'
        ]
      }
    },
    watch: {
      source: {
        files: ['app/sass/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
