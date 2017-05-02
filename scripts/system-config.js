System.config({
  transpiler: 'plugin-babel',
  map: {
    // System.js files
   'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
   'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
   'text': 'node_modules/systemjs-plugin-text/text.js',

   // App files
   'main': 'scripts/main.js',
   'requester': 'scripts/requester.js',
   'data': 'scripts/data.js',
   'loginController': 'scripts/controllers/loginController.js',
   'homeController': 'scripts/controllers/homeController.js',
   'registerController': 'scripts/controllers/registerController.js',
   'aboutController': 'scripts/controllers/aboutController.js',
    'constants': 'scripts/helpers/constants.js',
    'firebase': 'scripts/firebase-config.js',

   
   // templates
   'templates': 'scripts/helpers/templates.js',


   // Library files
    'jquery': 'node_modules/jquery/dist/jquery.min.js',
    'handlebars': 'node_modules/handlebars/dist/handlebars.js',
    'toastr': 'node_modules/toastr/build/toastr.min.js',
    'sammy': 'node_modules/sammy/lib/sammy.js',
    'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap.min.js'
 }
});

System.import('main');
