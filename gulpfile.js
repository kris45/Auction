/**
 * Created by My on 09.06.2017.
 */
var gulp 		 = require('gulp'),
    sass 		 = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts', function () {
    return gulp.src([

    ])
});

gulp.task('css-libs', function () {
    return gulp.src('src/css/')
});

gulp.task('browserSync', function () {
    browserSync({
        server : false,
        // server: {
        //     baseDir: 'src'
        // },
        notify: false
    })
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', function () {

});
