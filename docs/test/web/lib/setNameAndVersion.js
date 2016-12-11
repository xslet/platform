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
