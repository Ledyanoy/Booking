var gulp = require('gulp');
    browserSync = require('browser-sync');
    function reload() {
        browserSync.reload();
        done();
      };
      
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });    
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.html', reload);
    gulp.watch('app/css/**/*.css', reload);
    gulp.watch('app/js/**/*.js', reload);
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));