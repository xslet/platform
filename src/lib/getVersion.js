/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */

'use strict';

/**
 * Gets version number string from user agent string in upper case.
 *
 * @private
 * @param useragent {string} - The user agent string in upper case.
 * @param key {string} - The string which takes place before the version
 *   number string.
 * @param num {number} - The getting count of version number splitted by dots.
 * @return {string} The version number string which concatenates natural
 *   numbers with dots.
 */
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
