//gulp-util, allows outputting sometihing to the console with a method called LOG().
var gulp = require ('gulp'),
    gulptil = require ('gulp-util'),
    coffee = require ('gulp-coffee');

var coffeeSrouces = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function(){
    gulp.src(coffeeSrouces)
    // the results from the gulp.src will be passed into the .pipe
    .pipe(coffee({ bare: true})
         .on('error', gulptil.log)) // If you don't have this .on('error) it will crash gulp if you get an error.
    .pipe(gulp.dest('components/scripts')) // this will move the results of the coffee command to this method
});