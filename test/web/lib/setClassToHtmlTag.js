/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */
/**
 * Sets user agent informations to class attribute of HTML tag.
 *
 * @private
 * @param htmlTag {HTMLElement} - The HTML tag.
 * @param ua {object} - An object which has the browser informations.
 * @param os {object} - An object which has the OS informations.
 */
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
