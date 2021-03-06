var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var sassPaths = [
  'node_modules/normalize.scss/sass',
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/allaboutken-framework.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', sass.logError))
    .pipe(prefix({}))
    .pipe(gulp.dest('css'));
});

// watch task
gulp.task('watch', function(){
  gulp.watch(['./scss/**/*.scss'], 
    gulp.series('sass')
  );
});

gulp.task('dev', gulp.series('sass','watch'));

gulp.task('default', gulp.series('sass'));
