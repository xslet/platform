const gulp = require('gulp')
const fun = require('gulp-fun-style')
const del = require('del')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const jsdoc = require('gulp-jsdoc3')
const eslint = require('gulp-eslint')
const plumber = require('gulp-plumber')
const mocha = require('gulp-spawn-mocha')

const path = require('path')

var srcfiles = [
  'res/header.forweb',
  'src/setPlatform.js',
  'src/lib/detectUA.js',
  'src/lib/detectOS.js',
  'src/lib/getVersion.js',
  'src/lib/compareVersions.js',
  'src/lib/setNameAndVersion.js',
  'src/lib/setClassToHtmlTag.js',
  'res/footer.forweb',
]

var testfiles = ['test/node/**/*.test.js']

var destfile = 'dist/xslet.platform.js'
var minifile = 'dist/xslet.platform.min.js'


fun.build = [['clean', [['webify', 'lint', ['minify', 'makedoc'] ]] ]]
fun.build.description = 'Makes product js files and document files.'

fun.clean = ['cleanDest', 'cleanTest', 'cleanDocs']
fun.clean.description = 'Cleans all product files.'

fun.cleanDest = done => del(['dist/**'], done)
fun.cleanTest = done => del(['test/web/**/*.js', 'coverage/**'], done);
fun.cleanDocs = done => del(['docs/**'], done)

fun.webify = ['webifyDest', 'webifyTest']

fun.webifyDest = () =>
  gulp.src(srcfiles)
      .pipe(replace(/\n(module\.exports *=.*\n)+/g, '\n'))
      .pipe(replace(/\n(.*= *require *\(.*\n)+/g, '\n'))
      .pipe(replace(/\n(["']use strict["'];.*\n)+/g, '\n'))
      .pipe(concat(path.basename(destfile)))
      .pipe(gulp.dest(path.dirname(destfile)))

fun.webifyTest = () =>
  gulp.src(['src/**/*.js', 'test/node/**/*.js'])
      .pipe(replace(/\n(module\.exports *=.*\n)+/g, '\n'))
      .pipe(replace(/\n(.*= *require *\(.*\n)+/g, '\n'))
      .pipe(replace(/\n(["']use strict["'];.*\n)+/g, '\n'))
      .pipe(gulp.dest('./test/web'))

fun.minify = () =>
  gulp.src(destfile)
      .pipe(sourcemaps.init())
      .pipe(concat(path.basename(minifile)))
      .pipe(uglify({ preserveComments: 'some' }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.dirname(minifile)))

fun.lint = () =>
  gulp.src(destfile)
      .pipe(plumber())
      .pipe(eslint())
      .pipe(eslint.format())

fun.makedoc = done =>
  gulp.src([destfile, 'README.md'])
      .pipe(plumber())
      .pipe(jsdoc(require('./.jsdoc.json'), done))

fun.test = () =>
  gulp.src(testfiles)
      .pipe(plumber())
      .pipe(mocha())
fun.test.description = 'Runs the unit tests.'

fun.coverage = () =>
  gulp.src(testfiles)
      .pipe(plumber())
      .pipe(mocha({ istanbul: true }))
fun.coverage.description = 'Measures the coverage of the unit tests.'

fun.watch = {
  watch: [].concat(srcfiles, testfiles),
  call: [[ 'build', 'test' ]],
}
fun.watch.description = 'Watches file changes, then builds and tests.'

fun.default = fun.watch
