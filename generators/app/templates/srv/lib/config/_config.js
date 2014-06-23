var rootPath = process.env.PWD = process.cwd();

console.log('App rootPath: ' + rootPath);
console.log('Dev webRoot: ' + rootPath.concat('/dev'));
console.log('Prod webRoot: ' + rootPath.concat('/public'));

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 3000,
    webRoot: rootPath.concat('/dev')
  },

  production: {
    rootPath: rootPath,
    db: process.env.MONGOHQ_URL,
    port: process.env.PORT || 80,
    webRoot: rootPath.concat('/public')
  }
};