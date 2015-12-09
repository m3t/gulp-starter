var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp')
var handleErrors = require('../lib/handleErrors')
var path         = require('path')
var csslint      = require('gulp-csslint')

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'), exclude],
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var lintCssTask = function() {
  return gulp.src(paths.src)
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter('compact'))
    //.pipe(csslint.failReporter())
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
}

gulp.task('lint:css', lintCssTask)
module.exports = lintCssTask
