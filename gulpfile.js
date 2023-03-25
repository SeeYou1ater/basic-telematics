const {src, dest} = require('gulp')


const scss = require('gulp-sass')(require('sass'))


function styles() {
    return src('#source/scss/style.scss')
        .pipe(scss())
        .pipe(dest('css/style.min.css'))
}



exports.styles = styles;