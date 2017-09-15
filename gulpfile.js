//引入gulp包
var gulp=require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

//创建任务
	//默认 在执行default任务之前先执行cssmin、jsmin...
gulp.task('default',['cssmin','jsmin','htmlmin','imagemin']);
	//css压缩
gulp.task('cssmin',function(){
	gulp.src('./src/css/*.css')
		.pipe(cleanCSS({compatibility:'ie8'}))
		.pipe(gulp.dest('dist/css'))
});

	//js压缩
gulp.task('jsmin',function(){
	gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});
	//html压缩
gulp.task('htmlmin',function(){
	gulp.src('./src/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('dist'));

});
	//图片压缩
gulp.task('imagemin',function(){
	gulp.src('./src/images/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images'))


});























































































