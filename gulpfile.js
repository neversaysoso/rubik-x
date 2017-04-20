var tag = '1.3.0';
var http = 'https://rerubx.zwjk.com'
var gulp = require('gulp');

var less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'), //html压缩
    imagemin = require('gulp-imagemin'),//图片压缩
    pngcrush = require('imagemin-pngcrush'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    minifycss = require('gulp-minify-css'),//css压缩
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify'),//提示信息
    gulpCopy = require('gulp-file-copy'),
    rev = require('gulp-rev-append'),
    livereload = require('gulp-livereload'),
    replace = require('gulp-replace'),
    cssBase64 = require('gulp-css-base64'),
    htmlreplace = require('gulp-html-replace');

gulp.task('default', ['less', 'js', 'imgmin', 'rev'], function () {

});
gulp.task('tag', ['less', 'js', 'imgmin', 'tagrev'], function () {

});

gulp.task('less', function () {
    gulp.src('src/less/appstyle.less')
        .pipe(less())
        .pipe(cssBase64())
        .pipe(rename(function (path) {
            path.basename = "rbk-v" + tag;
            path.extname = ".css"
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(rename(function (path) {
            path.basename = "rbk-v" + tag + ".min";
            path.extname = ".css"
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('build/css'))
        .pipe(livereload());
});

gulp.task('js', function () {
    gulp.src(['src/js/iscroll.js', 'src/js/jweixin-1.0.0.js', 'src/js/swiper-3.3.1.jquery.min.js', 'src/js/components/rbk-base.js','src/js/components/rbk-call.js', 'src/js/components/*.js'])
        .pipe(concat('rbk-v' + tag + '.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(notify({ message: 'js task ok' }))
        .pipe(livereload());
    gulp.src('src/js/libs/*.js')
        .pipe(gulp.dest('build/js/libs'))
});

gulp.task('imgmin', function () {
    gulp.src('src/images/**/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('build/images'));
});

gulp.task('rev', function () {
    var options = {
        removeComments: true,//清除HTML注释
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    };
    gulp.src(['src/docs/**/*', '!src/docs/*/*.html'])
        .pipe(htmlreplace({
            'css': '../../../css/rbk-v' + tag + '.min.css',
            'js': [
                '../../../js/libs/jquery.min.js',
                '../../../js/rbk-v' + tag + '.min.js'
            ]
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('build/docs'))
        .pipe(livereload());
    gulp.src('src/docs/*/*.html')
        .pipe(htmlreplace({
            'css': '../../css/rbk-v' + tag + '.min.css',
            'js': [
                '../../js/libs/jquery.min.js',
                '../../js/rbk-v' + tag + '.min.js'
            ]
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('build/docs'))
        .pipe(livereload());
});

gulp.task('tagrev', function () {
    var options = {
        removeComments: true,//清除HTML注释
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    };
    gulp.src('src/docs/**/**/*')
        .pipe(htmlreplace({
            'css': http + '/v' + tag + '/css/rbk-v' + tag + '.min.css',
            'js': [
                http + '/v' + tag + '/js/libs/jquery.min.js',
                http + '/v' + tag + '/js/rbk-v' + tag + '.min.js'
            ]
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('build/docs'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/**/*.{less,js,html}', ['default'])
});