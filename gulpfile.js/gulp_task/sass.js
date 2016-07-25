var gulp       = require( 'gulp' ),
    plumber    = require('gulp-plumber'),
    sass       = require( 'gulp-sass' ),
    sourcemaps = require('gulp-sourcemaps'),
    config     = require( '../config' );

gulp.task('sass', function(){
    gulp.src(config.root.src + 'sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.root.dist + 'css/'));
});