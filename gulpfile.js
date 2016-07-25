// =======================================================
// PATH
// =======================================================
var path = {
    module: './node_modules/',
    src : "./src/",
    dist : "./dist/"
};

// =======================================================
// REQUIRE
// =======================================================

var gulp 		= require('gulp'),
    rename		= require('gulp-rename'),
    plumber 	= require('gulp-plumber'),
    prettify	= require('gulp-prettify'),

    bs = require('browser-sync').create();


// =======================================================
// TASK
// =======================================================

// ========================================================
// WEB_SERVER
// ========================================================

var server = require(path.module + 'gulp-webserver');

gulp.task('server', function () {
    gulp.src(path.dist)
		.pipe(plumber())
        .pipe(server({
            host: 'localhost',
            port: 8000
        }));
});

// ========================================================
// SASS
// ========================================================
var SASS_SRC_PATH = path.src + 'sass/**/*.scss',
    SASS_DIST_PATH = path.src + 'css/',
    sass = require(path.module + 'gulp-sass');

gulp.task('sass', function(){
    gulp.src(SASS_SRC_PATH)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(SASS_DIST_PATH));
});

// ========================================================
// EJS
// ========================================================
var EJS_SRC_PATH = [path.src+"**/*.ejs", path.src+"**/*.ejs", "!"+path.src+"**/_*.ejs"],
    EJS_DIST_PATH = path.dist+"",
    ejs = require(path.module + 'gulp-ejs');

gulp.task("ejs", function(){
    gulp.src(EJS_SRC_PATH)
        .pipe(plumber())
        .pipe(ejs('',{"ext": ".html"}))
		.pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest(EJS_DIST_PATH));
});

// ========================================================
// JAVASCRIPT
// ========================================================
var JS_SRC_PATH = 'js/**/*.js',
    JS_DIST_PATH = 'js/',
    MIN_JS_DIST_PATH = 'js/min/',
    uglify 		= require(path.module + 'gulp-uglify');

gulp.task('js', function() {
    gulp.src(JS_SRC_PATH)
        .pipe(plumber())
        .pipe(gulp.dest(path.dist + JS_DIST_PATH))
        .pipe(uglify())
        .pipe(rename(function(path){
            path.extname += '.min.js';
        }))
        .pipe(gulp.dest(MIN_JS_DIST_PATH))
});

// ========================================================
// WATCH
// ========================================================
gulp.task('watch', ['server'], function(){
    gulp.watch(SASS_SRC_PATH, ['sass']);
    gulp.watch(JS_SRC_PATH, ['js']);
    gulp.watch(EJS_SRC_PATH, ['ejs']);
});

gulp.task('default', ['bs', 'sass', 'ejs', 'js']);