'use strict';

var compareVersions = require('./compare-versions');

function createComparable() {
  var obj = {};

  Object.defineProperties(obj, {
    lt: {
      enumerable: true,
      value: function(name, version) {
        return (compareVersions(obj, name, version) < 0);
      },
    },
    lte: {
      enumerable: true,
      value: function(name, version) {
        return (compareVersions(obj, name, version) <= 0);
      },
    },
    gt: {
      enumerable: true,
      value: function(name, version) {
        return (compareVersions(obj, name, version) > 0);
      },
    },
    gte: {
      enumerable: true,
      value: function(name, version) {
        return (compareVersions(obj, name, version) >= 0);
      },
    },
    eq: {
      enumerable: true,
      value: function(name, version) {
        return (compareVersions(obj, name, version) === 0);
      },
    },
    ne: {
      enumerable: true,
      value: function(name, version) {
        return (compareVersions(obj, name, version) !== 0);
      },
    },
  });

  return obj;
}

module.exports = createComparable;
