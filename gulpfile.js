var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('debug-cover', function () {
    return browserify({entries: 'public/javascripts/cover.js', debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('cover.bundle.js'))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('debug-category', function () {
    return browserify({entries: 'public/javascripts/category.js', debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('category.bundle.js'))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('debug-blog', function () {
    return browserify({entries: 'public/javascripts/blog.js', debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('blog.bundle.js'))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('debug', ['debug-cover','debug-category', 'debug-blog']);

//gulp.task('browserSync', function(){
//
//});

//gulp.task('watch', ['debug'], function () {
//    gulp.watch('*.js', ['debug']);
//});

//gulp.task('default', ['watch']);