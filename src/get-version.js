'use strict';

function getVersion(useragent, key, num) {
  num = num || 1;
  var index = useragent.indexOf(key);
  if (index < 0) {
    return null;
  }

  var str = useragent.slice(index + key.length);
  str = str.replace(/[^0-9)]*/, '');

  var version = '';
  for (var i = 0; i < num; i++) {
    var result = /[^0-9]/.exec(str);
    if (result && result.index > 0) {
      version += '.' + str.slice(0, result.index);
      str = str.slice(result.index + 1);
    }
  }

  return version.slice(1);
}

module.exports = getVersion;
