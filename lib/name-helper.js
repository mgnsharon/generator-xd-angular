var _ = require('lodash'),
  mout = require('mout');

exports.classify = function (name) {
  return mout.string.pascalCase(name);
};

exports.titleize = function (name) {
  return mout.string.properCase(mout.string.replace(mout.string.hyphenate(name), ['-', '_'], ' '));
};

exports.hyphenate = function (name) {
  return mout.string.replace(mout.string.hyphenate(name), ['_'], '-')
}

exports.camelize = function (name) {
  return mout.string.camelCase(name)
}