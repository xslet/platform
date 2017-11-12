'use strict';

function compareVersions(obj, name, version) {
  if (obj.name !== name || obj.name === 'UNKNOWN') {
    return NaN;
  }

  var arr1 = obj.version.split('.');
  for (var i1 = 0, n1 = arr1.length; i1 < n1; i1++) {
    arr1[i1] = parseInt(arr1[i1], 10);
  }

  var arr2 = version.split('.');
  for (var i2 = 0, n2 = arr2.length; i2 < n2; i2++) {
    arr2[i2] = parseInt(arr2[i2], 10);
  }

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

module.exports = compareVersions;
