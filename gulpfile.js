var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');


//watch & compile scss
gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

//watch & compile js
gulp.task('typescript', function () {
    gulp.src('ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['sass']);
    gulp.watch('ts/**/*.ts',['typescript']);
});