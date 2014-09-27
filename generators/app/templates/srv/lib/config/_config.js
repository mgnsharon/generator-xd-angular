var rootPath = process.env.PWD = process.cwd();

console.log('App rootPath: ' + rootPath);
console.log('Dev webRoot: ' + rootPath.concat('/dev'));
console.log('Prod webRoot: ' + rootPath.concat('/public'));

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 8080,
    webRoot: rootPath.concat('/dev')
  },

  production: {
    rootPath: rootPath,
    port: process.env.PORT || 80,
    webRoot: rootPath.concat('/public')
  }
};