var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "./index.html"
        }
    });

    gulp.watch(["*.html","js/*.js","css/*.css"]).on('change',reload);
});

gulp.task('default',['serve']);