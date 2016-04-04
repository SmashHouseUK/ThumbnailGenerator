
var gulp  = require('gulp'),
    electron      = require('electron-prebuilt'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    runElectron = require("gulp-run-electron");

gulp.task('scripts', function(){
    return gulp.src('pregulp/scripts/**/**.*')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./app/scripts'));
});

gulp.task('html', function(){
    return gulp.src('pregulp/html/**/**.*')
        .pipe(gulp.dest('./app/'));
});

gulp.task('images', function(){
    return gulp.src('pregulp/images/**/**.*')
        .pipe(gulp.dest('./app/images'));
});

gulp.task('watch', function(){
    gulp.watch('pregulp/**/*.js',['scripts']);
    gulp.watch('pregulp/**/*.html',['html']);
});

gulp.task('dostuff', ['scripts', 'html', 'images']);

gulp.task('run', function () {
    gulp.src("app")
    .pipe(runElectron(["--cli-argument", "--another"], {cwd: ""}));
});