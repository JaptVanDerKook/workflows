//gulp-util, allows outputting sometihing to the console with a method called LOG().
var gulp = require('gulp'),
    gulptil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var coffeeSrouces = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];

gulp.task('coffee', function () {
    gulp.src(coffeeSrouces)
        // the results from the gulp.src will be passed into the .pipe
        .pipe(coffee({
                bare: true
            })
            .on('error', gulptil.log)) // If you don't have this .on('error) it will crash gulp if you get an error.
        .pipe(gulp.dest('components/scripts')) // this will move the results of the coffee command to this method
});

gulp.task('js', function () {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
})
