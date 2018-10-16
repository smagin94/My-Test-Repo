var gulp = require('gulp')
var mjml = require('gulp-mjml')

gulp.task('default', function() { 

    return gulp.src('./source/moqSecurityTemplate.mjml') 
    .pipe(mjml()) 
    .pipe(gulp.dest('./prod/moqSecurityTemplate.html '))

});
 

gulp.task('travel', function() { 

  gulp.src('./source/travelNZ.mjml') 

    .pipe(mjml()) 

    .pipe(gulp.dest('./prod/travel/travelNZ.html ')) 

})
