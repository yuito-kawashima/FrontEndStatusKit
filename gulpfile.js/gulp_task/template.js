var gulp     = require('gulp'),
    plumber  = require('gulp-plumber'),
    ejs      = require('gulp-ejs'),
    config   = require('../config');

gulp.task("ejs", function(){
    gulp.src([config.root.src + "**/*.ejs", config.root.src + "**/*.ejs", "!" + config.root.src + "**/_*.ejs"])
        .pipe(plumber())
        .pipe(ejs('',{"ext": ".html"}))
        .pipe(gulp.dest(config.root.dist + ""));
});