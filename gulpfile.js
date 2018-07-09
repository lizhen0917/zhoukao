var gulp = require('gulp');

var uglify = require('gulp-uglify');

var htmlmin = require('gulp-htmlmin');

var server = require('gulp-webserver');

var minCss = require('gulp-clean-css');

var path = require('path');

var url = require('url');

var fs = require('fs');

//起服务
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8585,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? 'index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
            }
        }))
});