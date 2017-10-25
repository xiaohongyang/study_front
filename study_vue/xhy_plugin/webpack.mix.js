const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/js/app.js', 'public/js/app.js')
    // .js('resources/assets/js/ajaxFileUpload.js', 'public/js')
    // .js('resources/assets/js/index/index.js', 'public/js/index')
    // .js('resources/assets/js/site.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    // .sass('resources/assets/sass/site.scss', 'public/css')
    // .version();

//mix.copy('public/js', 'public/css/bar.css');     