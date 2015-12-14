// Gulpfile.js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var APP_START_DIRECTORY = 'app';
var src_paths = {
    sass: ['../client/style/scss/*.scss', '../client/style/scss/**/*.scss'],
    js: ['../client/scripts/js/*.js', '../client/scripts/js/**/*.js', '../app/**/*.js'],
    html: ['../client/scripts/js/**/*.html']
};
var dest_paths = {
    sass: '../client/style/css',
    js: '../client/scripts/built'
};

gulp.task('lint', function () {  
    console.log("linting " + src_paths.js);
    gulp.src(src_paths.js, {cwd: APP_START_DIRECTORY})
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

gulp.task('sass', function() {
    console.log("sass it up.");
    gulp.src(src_paths.sass, {cwd: APP_START_DIRECTORY})
    .pipe(sass())
    .pipe(gulp.dest(dest_paths.sass, {cwd: APP_START_DIRECTORY}));
});

gulp.task('default', function () {
    nodemon({ script: 'server.js',
        ext: 'html js scss',
        ignore: ['../client/scripts/3rd'],
        args: ['local'],
        cwd: APP_START_DIRECTORY,
        tasks: ['lint', 'sass'],
        watch: [src_paths.js, src_paths.sass, src_paths.html]
    })
    .on('restart', function () {      
        console.log('restarted!')      
    })
})