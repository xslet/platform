'use strict';

const gulp = require('gulp')
const fun = require('gulp-fun-style')
const del = require('del')
const eslint = require('gulp-eslint')
const plumber = require('gulp-plumber')
const mocha = require('gulp-mocha')
const webpack = require('webpack-stream')
const yaml = require('gulp-yaml')
const headerfooter = require('gulp-headerfooter')
const rename = require('gulp-rename')
const named = require('vinyl-named')
const markdown = require('gulp-markdown')
const semver = require('semver')


fun.default = ['build']

fun.build = [['clean', [['lint', 'bundle', 'test', 'docs']] ]]
fun.build.description = 'Lint, bundle, test and make docs'


fun.clean = ['clean_dist', 'clean_test', 'clean_docs']
fun.clean.description = 'Clean all product files.'

fun.clean_dist = done => del(['dist/**'], done)
fun.clean_test = done => del(['coverage/**'], done)
fun.clean_docs = done => del(['docs/res/**'], done)


fun.lint = () =>
  gulp.src(['src/**/*.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
fun.lint.description = 'Lint js files.'


fun.test = [['test_makedata', 'test_with_mocha']]
fun.test.description = 'Runs tests.'

fun.test_makedata = () =>
  gulp.src('test/fixtures/*.yml')
    .pipe(yaml({ safe: true }))
    .pipe(gulp.dest('test/fixtures'))

fun.test_with_mocha = () =>
  gulp.src(['test/**/*.test.js'])
    .pipe(mocha())

fun.bundle = () =>
  gulp.src('src/entry.js')
    .pipe(webpack(require('./.webpack.config.js')))
    .pipe(gulp.dest('dist/'))
fun.bundle.description = 'Bundle source files.'


fun.watch_test = {
  watch: ['src/**/*.js', 'test/**/*.test.js'],
  call: [['lint', 'test']]
}

fun.watch_docs = { watch: ['docs/**/*.md'], call: ['docs'] }

fun.watch = ['watch_test', 'watch_doc']
fun.watch.description = 'Watches file changes, then lint, test or make docs.'


fun.docs = ['docs_makedata', 'docs_copyfiles', 'docs_maketests', 'docs_makeapi']
fun.docs.description = 'Make documents'

fun.docs_makedata = () =>
  gulp.src('test/fixtures/useragent.data.json')
    .pipe(headerfooter('var userAgentList = ', ';'))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('docs/res'))

fun.docs_copyfiles = () =>
  gulp.src(['dist/*',
            'node_modules/mocha/mocha.css',
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
           ])
    .pipe(gulp.dest('docs/res/'))

fun.docs_maketests = () => 
  gulp.src(['test/*.test.js', '!test/index.test.js'])
    .pipe(named())
    .pipe(webpack(require('./.webpack.test.config.js')))
    .pipe(gulp.dest('docs/res/'))

fun.docs_makeapi = () =>
  gulp.src('docs/index.md')
    .pipe(markdown())
    .pipe(headerfooter.header(
      '<!DOCTYPE html>\n<html>\n<head>\n' +
      '<meta charset="utf-8"/>\n' +
      '<title>@xslet/platform API document</title>\n' +
      '<link rel="stylesheet" href="./api.css"/>\n' +
      '<script src="./api.js"></script>\n' +
      '</head>\n<body>\n'
    ))
    .pipe(headerfooter.footer('</body>\n</html>'))
    .pipe(gulp.dest('docs/'))

