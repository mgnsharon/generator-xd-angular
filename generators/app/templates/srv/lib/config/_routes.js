module.exports = function (app, config) {

  app.get('*', function (req, res) {
    res.sendfile(config.webRoot.concat('/index.html'));
  });

};