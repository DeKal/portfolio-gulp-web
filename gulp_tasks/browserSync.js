// Static server for theme dev
var gulp = require('gulp'),
	paths = require('./config/paths'),
	browserSync = require('browser-sync');

// Static server
gulp.task('browserSync:server', function browserSyncSever() {
	browserSync({
		server: paths.build.main
	});
});

gulp.task('browserSync:reload', function browserSyncSeverReload() {
	return browserSync.reload();
});
