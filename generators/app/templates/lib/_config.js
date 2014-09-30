var rootPath = process.env.PWD = process.cwd();
var filesets = {
  templateCache: ['app/**/*.jade', '!app/index.jade', '!app/partials/**'],
  templates: ['app/index.jade', 'app/partials/*.jade'],
  js: ['app/**/*.js', '!app/**/*-spec.js'],
  jsall: ['app/**/*.js', '!app/**/*-mock-data.js'],
  sass: ['app/**/*.scss'],
  dev: 'dev/**'
};

var paths = {
  root: rootPath,
  app: rootPath.concat('/app/'),
  dev: rootPath.concat('/dev/'),
  vendor_dev: rootPath.concat('/dev/vendor/'),
  prod: rootPath.concat('/public/')
};

module.exports = {
  filesets: filesets,
  paths: paths,
  sassFile: paths.app.concat('app.scss'),
  server: {
    HOST: 'localhost',
    PORT: '8081'
  }
};