'use strict';

var detectUA = require('./detect-ua');
var detectOS = require('./detect-os');
var setHtmlTagClass = require('./set-html-tag-class');

function createPlatform(window) {
  var userAgent = window.navigator.userAgent.toUpperCase();
  var htmlTag = window.document.getElementsByTagName('html')[0];

  var ua = detectUA(userAgent);
  var os = detectOS(userAgent);

  setHtmlTagClass(htmlTag, ua, os);

  var platform = {};

  Object.defineProperties(platform, {
    ua: { enumerable: true, value: ua },
    os: { enumerable: true, value: os },
  });

  return platform;
}

module.exports = createPlatform;
