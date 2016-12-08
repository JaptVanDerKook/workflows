//gulp-util, allows outputting sometihing to the console with a method called LOG().
var gulp = require('gulp'),
    gulptil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];

var sassSources = ['components/sass/style.scss']

gulp.task('coffee', function () {
    gulp.src(coffeeSources)
        // the results from the gulp.src will be passed into the .pipe
        .pipe(coffee({
                bare: true
            })
            .on('error', gulptil.log)) // If you don't have this .on('error) it will crash gulp if you get an error.
        .pipe(gulp.dest('components/scripts')) // this will move the results of the coffee command to this method
});
// the [] array parameters after 'js' are dependencies that will run before the current one 'js'. You can list a few array items for the parameter.
gulp.task('js', function () {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js')) // this task will push all the js files into the development folder
});

gulp.task('compass', function () {
    gulp.src(coffeeSources)
        .pipe(compass({
               sass: 'components/sass',
                image: 'builds/development/images',
                style: 'expanded' // From (http://sass-lang.com/documentation/file.SASS_REFERENCE.html) that mentions the different types of  styles.
            })
            .on('error', gulptil.log)) 
        .pipe(gulp.dest('builds/development/css'))
});

gulp.task('default', ['coffee', 'js', 'compass']);

gulp.task('watch', function(){
   gulp.watch(coffeeSources, ['coffee']);
   gulp.watch(jsSources, ['js']);
});