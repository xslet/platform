/*!
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */

/**
 * Is the top namespace of all xslet modules.
 *
 * @namespace xslet
 * @global
 */
;xslet = (typeof xslet === 'undefined') ? {} : xslet;

(function(){
  'use strict';
  definePlatform(xslet, window);

/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */


function definePlatform(xslet, window) {
  var userAgent = window.navigator.userAgent.toUpperCase();
  var htmlTag = window.document.getElementsByTagName('html')[0];

  var ua = detectUA(userAgent);
  var os = detectOS(userAgent);

  setClassToHtmlTag(htmlTag, ua, os);

  /**
   * Is the namespace for runtime platform informations.
   *
   * @namespace xslet.platform
   */
  Object.defineProperty(xslet, 'platform', {
    enumerable: true,
    value: {},
  });

  /**
   * Provides the browser informations.
   *
   * @namespace xslet.platform.ua
   * @prop name    {string} - The browser name in upper case characters.
   * @prop version {string} - The version number of the browser.
   * @prop FIREFOX {boolean} - true, if the browser is Firefox.
   * @prop CHROME  {boolean} - true, if the browser is Chrome.
   * @prop EDGE    {boolean} - true, if the browser is Edge.
   * @prop MSIE    {boolean} - true, if the browser is IE.
   * @prop SAFARI  {boolean} - true, if the browser is Safari.
   * @prop VIVALDI {boolean} - true, if the browser is Vivaldi.
   * @prop OPERA   {boolean} - true, if the browser is Opera.
   * @prop UNKNOWN {boolean} - true, if the browser is unknown.
   */
  Object.defineProperty(xslet.platform, 'ua', {
    enumerable: true,
    value: ua,
  });

  /**
   * Provides the OS informations.
   *
   * @namespace xslet.platform.os
   * @prop name    {string} - The OS name by upper case characters.
   * @prop version {string} - The version number of the OS.
   * @prop LINUX   {boolean} - true, if the OS is Linux.
   * @prop WINNT   {boolean} - true, if the OS is Windows NT.
   * @prop MACOS   {boolean} - true, if the OS is macOS.
   * @prop ANDROID {boolean} - true, if the OS is Android.
   * @prop IOS     {boolean} - true, if the OS is iOS.
   * @prop IPHONE  {boolean} - true, if the hardware is iPhone.
   * @prop IPAD    {boolean} - true, if the hardware is iPad
   * @prop IPOD    {boolean} - true, if the hardware is iPod.
   * @prop UNKNOWN {boolean} - true, if the OS is unknown.
   */
  Object.defineProperty(xslet.platform, 'os', {
    enumerable: true,
    value: os,
  });

  /**
   * Returns true if the browser is less than the specified version.
   *
   * @method xslet.platform.ua.lt
   * @param uaName    {string} - The browser name to be compared.
   * @param uaVersion {string} - The browser version to be compared.
   * @return {boolean} true if the browser is less than the specified version.
   */
  Object.defineProperty(xslet.platform.ua, 'lt', {
    enumerable: true,
    value: function(uaName, uaVersion) {
      return compareVersions(xslet.platform.ua, uaName, uaVersion) < 0;
    },
  });

  /**
   * Returns true if the browser is less than or equal to the specified
   * version.
   *
   * @method xslet.platform.ua.lte
   * @param uaName    {string} - The browser name to be compared.
   * @param uaVersion {string} - The browser version to be compared.
   * @return {boolean} true if the browser is less than or equal to the
   *   specified version.
   */
  Object.defineProperty(xslet.platform.ua, 'lte', {
    enumerable: true,
    value: function(uaName, uaVersion) {
      return compareVersions(xslet.platform.ua, uaName, uaVersion) <= 0;
    },
  });

  /**
   * Returns true if the browser is greater than the specified version.
   *
   * @method xslet.platform.ua.gt
   * @param uaName    {string} - The browser name to be compared.
   * @param uaVersion {string} - The browser version to be compared.
   * @return {boolean} true if the browser is greater than the specified
   *   version.
   */
  Object.defineProperty(xslet.platform.ua, 'gt', {
    enumerable: true,
    value: function(uaName, uaVersion) {
      return compareVersions(xslet.platform.ua, uaName, uaVersion) > 0;
    },
  });

  /**
   * Returns true if the browser is greater than or equal to the specified
   * version.
   *
   * @method xslet.platform.ua.gte
   * @param uaName    {string} - The browser name to be compared.
   * @param uaVersion {string} - The browser version to be compared.
   * @return {boolean} true if the browser is greater than or equal to the
   *   specified version.
   */
  Object.defineProperty(xslet.platform.ua, 'gte', {
    enumerable: true,
    value: function(uaName, uaVersion) {
      return compareVersions(xslet.platform.ua, uaName, uaVersion) >= 0;
    },
  });

  /**
   * Returns true if the browser is equal to the specified version.
   *
   * @method xslet.platform.ua.eq
   * @param uaName    {string} - The browser name to be compared.
   * @param uaVersion {string} - The browser version to be compared.
   * @return {boolean} true if the browser is equal to the specified version.
   */
  Object.defineProperty(xslet.platform.ua, 'eq', {
    enumerable: true,
    value: function(uaName, uaVersion) {
      return compareVersions(xslet.platform.ua, uaName, uaVersion) === 0;
    },
  });

  /**
   * Returns true if the browser is not equal to the specified version.
   *
   * @method xslet.platform.ua.ne
   * @param uaName    {string} - The browser name to be compared.
   * @param uaVersion {string} - The browser version to be compared.
   * @return {boolean} true if the browser is not equal to the specified
   *   version.
   */
  Object.defineProperty(xslet.platform.ua, 'ne', {
    enumerable: true,
    value: function(uaName, uaVersion) {
      return compareVersions(xslet.platform.ua, uaName, uaVersion) !== 0;
    },
  });

  /**
   * Returns true if the OS is less than the specified version.
   *
   * @method xslet.platform.os.lt
   * @param osName    {string} - The OS name to be compared.
   * @param osVersion {string} - The OS version to be compared.
   * @return {boolean} true if the OS is less than the specified version.
   */
  Object.defineProperty(xslet.platform.os, 'lt', {
    enumerable: true,
    value: function(osName, osVersion) {
      return compareVersions(xslet.platform.os, osName, osVersion) < 0;
    },
  });

  /**
   * Returns true if the OS is less than or equal to the specified version.
   *
   * @method xslet.platform.os.lte
   * @param osName    {string} - The OS name to be compared.
   * @param osVersion {string} - The OS version to be compared.
   * @return {boolean} true if the OS is less than or equal to the specified
   *   version.
   */
  Object.defineProperty(xslet.platform.os, 'lte', {
    enumerable: true,
    value: function(osName, osVersion) {
      return compareVersions(xslet.platform.os, osName, osVersion) <= 0;
    },
  });

  /**
   * Returns true if the OS is greater than the specified version.
   *
   * @method xslet.platform.os.gt
   * @param osName    {string} - The OS name to be compared.
   * @param osVersion {string} - The OS version to be compared.
   * @return {boolean} true if the OS is greater than the specified version.
   */
  Object.defineProperty(xslet.platform.os, 'gt', {
    enumerable: true,
    value: function(osName, osVersion) {
      return compareVersions(xslet.platform.os, osName, osVersion) > 0;
    },
  });

  /**
   * Returns true if the OS is greater than or equal to the specified
   * version.
   *
   * @method xslet.platform.os.gte
   * @param osName    {string} - The OS name to be compared.
   * @param osVersion {string} - The OS version to be compared.
   * @return {boolean} true if the OS is greater than or equal to the
   *   specified version.
   */
  Object.defineProperty(xslet.platform.os, 'gte', {
    enumerable: true,
    value: function(osName, osVersion) {
      return compareVersions(xslet.platform.os, osName, osVersion) >= 0;
    },
  });

  /**
   * Returns true if the OS is equal to the specified version.
   *
   * @method xslet.platform.os.eq
   * @param osName    {string} - The OS name to be compared.
   * @param osVersion {string} - The OS version to be compared.
   * @return {boolean} true if the OS is equal to the specified version.
   */
  Object.defineProperty(xslet.platform.os, 'eq', {
    enumerable: true,
    value: function(osName, osVersion) {
      return compareVersions(xslet.platform.os, osName, osVersion) === 0;
    },
  });

  /**
   * Returns true if the OS is not equal to the specified version.
   *
   * @method xslet.platform.os.ne
   * @param osName    {string} - The OS name to be compared.
   * @param osVersion {string} - The OS version to be compared.
   * @return {boolean} true if the OS is not equal to the specified version.
   */
  Object.defineProperty(xslet.platform.os, 'ne', {
    enumerable: true,
    value: function(osName, osVersion) {
      return !(compareVersions(xslet.platform.os, osName, osVersion) === 0);
    },
  });
}


/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */



/**
 * Parses the user agent string which is converted to upper case and gets
 * the browser informations.
 *
 * @private
 * @param useragent {string} - The user agent string which is converted to
 *   upper case.
 * @return {object} An object which has the name and the version of the
 *   browser.
 */
function detectUA(useragent) {
  var ua = {},
      version,
      candids = [
        'FIREFOX',
        'CHROME',
        'EDGE',
        'MSIE',
        'SAFARI',
        'OPERA',
        'VIVALDI',
        'UNKNOWN',
      ];

  if (useragent.indexOf('OPERA') >= 0) {
    version = getVersion(useragent, 'VERSION');
    setNameAndVersion(ua, candids, 'OPERA', version);
    return ua;
  }

  if ((version = getVersion(useragent, 'OPR'))) {
    setNameAndVersion(ua, candids, 'OPERA', version);
    return ua;
  }

  if ((version = getVersion(useragent, 'OPIOS'))) {
    setNameAndVersion(ua, candids, 'OPERA', version);
    return ua;
  }

  if ((version = getVersion(useragent, 'EDGE'))) {
    setNameAndVersion(ua, candids, 'EDGE', version);
    return ua;
  }

  if ((version = getVersion(useragent, 'MSIE'))) {
    setNameAndVersion(ua, candids, 'MSIE', version);
    return ua;
  }

  if (useragent.indexOf('TRIDENT') >= 0) {
    setNameAndVersion(ua, candids, 'MSIE', getVersion(useragent, 'RV'));
    return ua;
  }

  if ((version = getVersion(useragent, 'VIVALDI'))) {
    setNameAndVersion(ua, candids, 'VIVALDI', version);
    return ua;
  }

  if (useragent.indexOf('FXIOS') >= 0) {
    setNameAndVersion(ua, candids, 'FIREFOX', '');
    return ua;
  }

  if ((version = getVersion(useragent, 'CHROME'))) {
    setNameAndVersion(ua, candids, 'CHROME', version);
    return ua;
  }

  if ((version = getVersion(useragent, 'CRIOS'))) {
    setNameAndVersion(ua, candids, 'CHROME', version);
    return ua;
  }

  if (useragent.indexOf('SAFARI') >= 0) {
    setNameAndVersion(ua, candids, 'SAFARI', getVersion(useragent, 'VERSION'));
    return ua;
  }

  if ((version = getVersion(useragent, 'FIREFOX'))) {
    setNameAndVersion(ua, candids, 'FIREFOX', version);
    return ua;
  }

  setNameAndVersion(ua, candids, 'UNKNOWN', '');
  return ua;
}


/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */



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

  if ((version = getVersion(useragent, 'ANDROID', 2))) {
    setNameAndVersion(os, candids, 'ANDROID', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
    return os;
  }

  if ((version = getVersion(useragent, 'WINDOWS', 2))) {
    setNameAndVersion(os, candids, 'WINNT', version);
    Object.defineProperty(os, 'IOS', { enumerable: true, value: false });
    return os;
  }

  if ((version = getVersion(useragent, 'MAC OS X', 2))) {
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


/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */


/**
 * Gets version number string from user agent string in upper case.
 *
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
    return '';
  }

  var str = useragent.slice(index + key.length);
  str = str.replace(/[^0-9]*/, '');

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


/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */


/**
 * Compares the name and version in the specified object to the name and the
 * version specified as the second and third arguments.
 *
 * The version strings are strings which concatenate natural numbers with dots.
 * (ex. '4', '1.23.5').
 *
 * @private
 * @param obj {object} - An object which has `name` property and `version`
 *   property.
 * @param name {string} - A name string.
 * @param version (string} - A version string.
 */
function compareVersions(obj, name, version) {
  if (obj.name !== name || obj.name === 'UNKNOWN') {
    return NaN;
  }

  var arr1 = obj.version.split('.').map(toInteger);
  var arr2 = version.split('.').map(toInteger);

  for (var i = 0, n = arr1.length; i < n; i++) {
    if (arr2[i] == null) {
      return 1;
    }

    if (arr1[i] < arr2[i]) {
      return -1;
    }

    if (arr1[i] > arr2[i]) {
      return 1;
    }
  }

  if (arr1.length < arr2.length) {
    return -1;
  }

  return 0;
}

function toInteger(v) {
  return parseInt(v);
}


/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */


/**
 * Sets the name, the version and boolean flags of candidate names to the
 * object.
 *
 * The flags of candidate names are setted true if the name equals the name
 * of the 3rd argument and false otherwise.
 *
 * @private
 * @param obj {object} - An object
 * @param candids {Array<string>} - a string array of candidate names.
 * @param name {string} - A name.
 * @param version {string} - A version string.
 */
function setNameAndVersion(obj, candids, name, version) {
  Object.defineProperty(obj, 'name', { enumerable: true, value: name });
  Object.defineProperty(obj, 'version', { enumerable: true, value: version });

  Object.defineProperty(obj, name, { enumerable: true, value: true });

  for (var i = 0, n = candids.length; i < n; i++) {
    if (candids[i] === name) {
      continue;
    }
    Object.defineProperty(obj, candids[i], { enumerable: true, value: false });
  }
}


'use strict';

function setClassToHtmlTag(htmlTag, ua, os) {
  var cls = htmlTag.className || '';
  if (cls) {
    cls += ' ';
  }

  cls += ua.name;
  if (ua.version) {
    cls += ' ' + ua.name + '-' + String(ua.version).replace(/\./, '_');
  }

  cls += ' ' + os.name;
  if (os.version) {
    cls += ' ' + os.name + '-' + String(os.version).replace(/\./, '_');
  }
  if (os.IOS) {
    cls += ' IOS';
  }

  htmlTag.className = cls;
}


}());
