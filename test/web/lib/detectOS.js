/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */
/* eslint max-statements: "off" */

/**
 * Parses the user agent string which is converted to upper case and gets
 * the OS informations.
 *
 * @private
 * @param useragent {string} - The user agent string which is converted to
 *   upper case.
 * @return {object} An object which has the name and the version of the
 *   browser.
 */
function detectOS(useragent) {
  var os = {},
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
