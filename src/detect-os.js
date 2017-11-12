'use strict';

var createComparable = require('./create-comparable');
var getVersion = require('./get-version');
var setNameAndVersion = require('./set-name-and-version');

/* eslint max-statements: "off" */

function detectOS(useragent) {
  var os = createComparable(),
      version,
      candids = [
        'IPOD',
        'IPAD',
        'IPHONE',
        'ANDROID',
        'WINNT',
        'MACOS',
        'LINUX',
        'UNKNOWN',
      ];

  if (useragent.indexOf('IPOD') >= 0) {
    version = getVersion(useragent, 'IPHONE OS', 2);
    setNameAndVersion(os, candids, 'IPOD', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: true });
    return os;
  }

  if (useragent.indexOf('IPAD') >= 0) {
    version = getVersion(useragent, 'IPHONE OS', 2);
    if (!version) {
      version = getVersion(useragent, 'CPU OS', 2);
    }
    setNameAndVersion(os, candids, 'IPAD', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: true });
    return os;
  }

  if (useragent.indexOf('IPHONE') >= 0) {
    version = getVersion(useragent, 'IPHONE OS', 2);
    setNameAndVersion(os, candids, 'IPHONE', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: true });
    return os;
  }

  if ((version = getVersion(useragent, 'ANDROID', 2)) != null) {
    setNameAndVersion(os, candids, 'ANDROID', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
    return os;
  }

  if ((version = getVersion(useragent, 'WINDOWS', 2)) != null) {
    setNameAndVersion(os, candids, 'WINNT', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
    return os;
  }

  if ((version = getVersion(useragent, 'MAC OS X', 2)) != null) {
    setNameAndVersion(os, candids, 'MACOS', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
    return os;
  }

  if (useragent.indexOf('LINUX') >= 0) {
    setNameAndVersion(os, candids, 'LINUX', '');
    Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
    return os;
  }

  setNameAndVersion(os, candids, 'UNKNOWN', '');
  Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
  return os;
}

module.exports = detectOS;
