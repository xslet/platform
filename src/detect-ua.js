'use strict';

var createComparable = require('./create-comparable');
var getVersion = require('./get-version');
var setNameAndVersion = require('./set-name-and-version');

/* eslint max-statements: "off" */

function detectUA(useragent) {
  var ua = createComparable(),
      version,
      candids = [
        'FIREFOX',
        'CHROME',
        'EDGE',
        'MSIE',
        'SAFARI',
        'OPERA',
        'VIVALDI',
        'PHANTOMJS',
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

  if ((version = getVersion(useragent, 'PHANTOMJS'))) {
    setNameAndVersion(ua, candids, 'PHANTOMJS', version);
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

module.exports = detectUA;
