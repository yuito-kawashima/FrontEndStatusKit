var gulp     = require('gulp'),
    rename   = require('gulp-rename'),
    plumber  = require('gulp-plumber'),
    uglify   = require('gulp-uglify');
    config   = require('../config');

gulp.task('js', function() {
    gulp.src(config.root.src + 'js/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest(config.root.dist + 'js/'))
        .pipe(uglify())
        .pipe(rename(function(path){
            path.extname += '.min.js';
        }))
        .pipe(gulp.dest(config.root.dist + 'js/min/'))
});