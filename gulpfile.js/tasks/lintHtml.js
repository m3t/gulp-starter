var config       = require('../config')
if(!config.tasks.html) return

var gulp         = require('gulp')
var handleErrors = require('../lib/handleErrors')
var path         = require('path')
var htmlhint     = require("gulp-htmlhint")

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.html'), exclude],
  dest: path.join(config.root.dest, config.tasks.html.dest)
}

var lintHtmlTask = function() {
  return gulp.src(paths.src)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    //.pipe(htmlhint.failReporter({ suppress: true }))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
}

gulp.task('lint:html', lintHtmlTask)
module.exports = lintHtmlTask
