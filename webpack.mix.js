let mix = require('laravel-mix');

mix.js('src/app.js', 'assets')
    .sass('src/styles.scss', 'assets');
