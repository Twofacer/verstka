const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
const uglify = require("gulp-uglify-es").default;

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}
function cleanDist() {
  return del("dist");
}
function scripts() {
  return src(["app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}
function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"]
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}
function build() {
  return src(
    [
      "app/css/style.min.css",
      "app/js/main.min.js",
      "app/fonts/**/*",
      "app/*.html"
    ],
    {
      base: "app"
    }
  ).pipe(dest("dist"));
}
function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/main.js", "!app/js/main.min.js"], scripts);
  watch(["app/*.html"]).on("change", browserSync.reload);
}
function images() {
  return src("app/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(dest("dist/images"));
}
exports.styles = styles;
exports.watching = watching;
exports.images = images;
exports.browsersync = browsersync;
exports.cleanDist = cleanDist;
exports.scripts = scripts;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, browsersync, watching);
