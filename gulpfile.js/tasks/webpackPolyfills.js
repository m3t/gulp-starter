var config = require('../config')
if(!config.tasks.js) return

var config  = require('../lib/webpack-multi-config')('polyfills')
var gulp    = require('gulp')
var logger  = require('../lib/compileLogger')
var webpack = require('webpack')

var webpackPolyfillsTask = function(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack:polyfills', webpackPolyfillsTask)
module.exports = webpackPolyfillsTask
