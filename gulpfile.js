var gulp = require('gulp');
    browserSync = require('browser-sync');
    function reload() {
        browserSync.reload();
        done();
      };  
          
var pug = require('gulp-pug');
var sass = require('gulp-sass');
      
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist/'
        },
        notify: false
    });    
});

gulp.task('pug', function() {
    return gulp.src('app/pug/index.pug')
      .pipe(pug({
          pretty: true
        }))
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/js/**/*.js', reload);
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));