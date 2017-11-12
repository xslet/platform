'use strict';

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

module.exports = setNameAndVersion;
