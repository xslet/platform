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
    if (i >= arr2.length) {
      return 1;
    }

    if (arr1[i].length || isNaN(arr1[i]) ||
        arr2[i].length || isNaN(arr2[i])) {
      return NaN;
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
