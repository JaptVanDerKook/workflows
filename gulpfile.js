//gulp-util, allows outputting sometihing to the console with a method called LOG().
var gulp = require ('gulp');
var gulptil = require ('gulp-util');

gulp.task('log', function(){
    gulptil.log('PRINT TO CONSOLE TEST');
});