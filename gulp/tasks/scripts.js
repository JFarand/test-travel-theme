/**
 * Created by OWL on 1/3/2017.
 */
var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function(callback){
    webpack(require('../../webpack.config.js'), function(err, stats){
        if(err){
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
})