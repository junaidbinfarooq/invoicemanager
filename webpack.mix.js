let mix = require('laravel-mix');

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

// jQuery Auto-loading
mix.autoload({
    'jquery': ['$', 'window.$', 'jQuery', 'window.jQuery', 'jquery', 'window.jquery'],
    'vue': ['Vue', 'window.Vue'],
    'moment': ['moment', 'window.moment']
});

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['jquery', 'bootstrap', 'bootstrap-datepicker', 'vue-bootstrap-datetimepicker', 'popper.js', 'lodash', 'vue', 'vue-router', 'axios']);

// Custom Styles Compliation

/*mix.styles([
    'public/css/offcanvas.css'
], 'public/css/app.css');*/


// Custom Scripts Compliation

/*mix.scripts([
    'public/js/admin.js',
    'public/js/dashboard.js'
], 'public/js/scripts.js');*/


// Browser Sync

//mix.browserSync('localhost:8000');