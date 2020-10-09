

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        seperator: ';',
        stripBanners: true,
      },
      dist: {
        src: ['../image_carousel/dist/bundle.js', '../productOptions/client/public/dist/bundle.js', '../recommendedProducts/dist/main.js', '../target_reviews_component/Public/bundle.js'],
        dest: './dist/proxyBundle.js'
      }
    },
    watch: {
      files: ['./dist/proxyBundle.js'],
      tasks: ['concat']
    }
  })
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'watch']);
};