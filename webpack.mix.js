const mix = require('laravel-mix');

mix
  .js('app/javascript/application.js', 'app/assets/builds')
  .react()
  .postCss('app/javascript/application.css', 'app/assets/builds', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  .alias({
    '@': 'app/javascript',
  });

mix.webpackConfig({
  stats: {
    children: true,
  },
});

if (mix.inProduction()) {
  mix.version();
}
