/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */


function setPlatform(xslet, window) {
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

