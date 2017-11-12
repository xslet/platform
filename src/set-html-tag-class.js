'use strict';

function setHtmlTagClass(htmlTag, ua, os) {
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

module.exports = setHtmlTagClass;
