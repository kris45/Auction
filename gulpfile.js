/**
 * Created by My on 09.06.2017.
 */
var gulp 		 = require('gulp'),
    sass 		 = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    del          = require('del');

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts', function () {
    return gulp.src([
        'src/libs/jquery/jquery.min.js',
        'src/libs/lodash/lodash.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
});

gulp.task('css-libs', function () {
    return gulp.src('src/css/')
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
             baseDir: 'src'
         },
        notify: false
    })
});

gulp.task('clean', function () {
    return del.sync('dist');
})

gulp.task('watch', ['browserSync', 'sass', 'scripts'], function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['sass', 'clean', 'scripts'], function () {
    var buildCss = gulp.src([
        'src/css/reset.css',
        'src/css/main.css'
    ])
    .pipe(gulp.dest('dist/css'));

    var buildImg = gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'));

    var builJ = gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'));

    var builHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});
