var gulp = require('gulp'); 

var mjml = require('gulp-mjml')

gulp.task('default', function() { 

    gulp.src('./source/example.mjml') 

    .pipe(mjml()) 

    .pipe(gulp.dest('./prod/example.html ')) 

});
 

gulp.task('travel', function() { 

  gulp.src('./source/travelNZ.mjml') 

    .pipe(mjml()) 

    .pipe(gulp.dest('./prod/travel/travelNZ.html ')) 

});
