var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    mqpacker = require("css-mqpacker"),
    sourcemaps = require("gulp-sourcemaps");

function _sass() {
    return gulp
        .src('./assets/template/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./assets/template/css/'))
}

function _postcss() {
    return gulp
        .src("./assets/template/css/main.css")
        .pipe(postcss([
            autoprefixer(),
            mqpacker()
        ]))
        .pipe(gulp.dest('./assets/template/css/'));
}

function _minify() {
    return gulp
        .src("./assets/template/css/main.css")
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./assets/template/css/'));
}


exports.dev = gulp.series(
    _sass,
    _postcss,
    _minify
);

gulp.task("dev:w", function() {
    gulp.series("dev");
    gulp.watch("./assets/template/sass/**/*.sass", gulp.series("dev"));
});



// gulp.task('dev', function (done) {
//     gulp.parallel("sass", "postcss");
//     done();
// });

// gulp.task('postcss', function (done) {
//     gulp
//         .src("./css/main.css")
//         .pipe(postcss([
//             autoprefixer(),
//             mqpacker()
//         ]))
//         .pipe(gulp.dest('css/'))
//     done();
// });

// gulp.task('dev', function (done) {
//     gulp.parallel("sass", "postcss");
//     done();
// });
//
// gulp.task('dev:watch', function (done) {
//     gulp.watch("./sass/**/*.sass", gulp.parallel('dev'));
//     done();
// });


// .pipe(postcss([autoprefixer(), cssnano()]))
// .pipe(sourcemaps.write())
// .pipe(gulp.dest('./dist'));