var gulp = require ("gulp");
var pug = require ("gulp-pug");
var sass = require ("gulp-sass");

gulp.task("pug", function() {
    return gulp
        .src("./pug/*.pug")
        .pipe(pug())
        .pipe(gulp.dest("./dist/html"));
});

gulp.task("pug:watch", function() {
    gulp.watch("./pug/**/*.pug", gulp.series("pug"));
});

gulp.task("sass", function() {
    return gulp
        .src("./sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"));
});

gulp.task("sass:watch", function() {
    gulp.watch("./sass/**/*.scss", gulp.series("sass"));
});


