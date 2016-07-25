require('require-dir')('./gulp_task', { recurse: true });

var gulp     = require('gulp'),
    server   = require('gulp-webserver');

gulp.task('server', function () {
    gulp.src('../dist') // 公開したい静的ファイルを配置したディレクトリを指定する
        .pipe(server({
            host: 'localhost',
            port: 8000,
            livereload: true,
            open: true
        }));
});