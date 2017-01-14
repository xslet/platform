# [@xslet/platform][repo-url] [![Github.io][io-image]][io-url] [![NPM version][npm-image]][npm-url] [![MIT License][mit-image]][mit-url] [![Coverage Status][coverage-image]][coverage-url]

Gets platform informations of the Web browser.

Build
-----

Build this module:

```sh
$ gulp build
```


Usage
-----

Load this module in a browser:

```js
<script src="xslet.platform.min.js"></script>
```

Get platform informations:

```js
// On Firefox 48.0 and Windows 10.0
xslet.platform.ua.name      // => 'FIREFOX'
xslet.platform.ua.version   // => '48'
xslet.platform.ua.FIREFOX   // => true
xslet.platform.ua.MSIE      // => false
xslet.platform.os.name      // => 'WINNT'
xslet.platform.os.version   // => '10.0'
xslet.platform.os.WINNT     // => true
xslet.platform.os.LINUX     // => false
```

Write CSS by platform:

```css
/* On Firefox 48.0 and Windows 10.0 */
html.UA-FIREFOX { ... }
html.UA-FIREFOX-48 { ... }
html.OS-WINNT { ... }
html.OS-WINNT-10_0 { ... }
```

APIs for javascript
-------------------

#### <u>xslet.platform.ua.name</u>

The browser name in upper case characters.
(ex. 'FIREFOX', 'MSIE', 'CHROME').

Type: string

#### <u>xslet.platform.ua.version</u>

The browser version which concatenates natural numbers by dots.
(ex. '48', '10.0').

Type: string

#### <u>xslet.platform.ua.*NAME*</u>

The flag of which the name is the browser name in upper case.

Type: boolean

#### <u>xslet.platform.os.name</u>

The OS name in upper case characters.
(ex. 'WINNT', 'LINUX', 'IPHONE')

Type: string

#### <u>xslet.platform.os.version</u>

The OS version which concatenates natural numbers by dots.
(ex. '48', '10.0').

Type: string

#### <u>xslet.platform.os.*NAME*</u>

The flag of which the name is the OS name in upper case.

Type: boolean

#### <u>xslet.platform.ua.lt(*NAME*, *VERSION*)</u>

Returns true if the browser is less than the specified version.

Type: boolean

#### <u>xslet.platform.ua.lte(*NAME*, *VERSION*)</u>

Returns true if the browser is less than or equal to the specified version.

Type: boolean

#### <u>xslet.platform.ua.gt(*NAME*, *VERSION*)</u>

Returns true if the browser is greater than the specified version.

Type: boolean

#### <u>xslet.platform.ua.gte(*NAME*, *VERSION*)</u>

Returns true if the browser is greater than or equal to the specified version.

Type: boolean

#### <u>xslet.platform.ua.eq(*NAME*, *VERSION*)</u>

Returns true if the browser is equal to the specified version.

Type: boolean

#### <u>xslet.platform.ua.ne(*NAME*, *VERSION*)</u>

Returns true if the browser is not equal to the specified version.

Type: boolean

#### <u>xslet.platform.os.lt(*NAME*, *VERSION*)</u>

Returns true if the OS is less than the specified version.

Type: boolean

#### <u>xslet.platform.os.lte(*NAME*, *VERSION*)</u>

Returns true if the OS is less than or equal to the specified version.

Type: boolean

#### <u>xslet.platform.os.gt(*NAME*, *VERSION*)</u>

Returns true if the OS is greater than the specified version.

Type: boolean

#### <u>xslet.platform.os.gte(*NAME*, *VERSION*)</u>

Returns true if the OS is greater than or equal to the specified version.

Type: boolean

#### <u>xslet.platform.os.eq(*NAME*, *VERSION*)</u>

Returns true if the OS is equal to the specified version.

Type: boolean

#### <u>xslet.platform.os.ne(*NAME*, *VERSION*)</u>

Returns true if the browser is not equal to the specified version.

Type: boolean


APIs for CSS
------------

#### <u>html.UA-*NAME*</u>

Is used to change style applications for each browser.

#### <u>html.UA-*NAME*-*VERSION*</u>

Is used to change style applications for each version of browsers.

#### <u>html.OS-*NAME*</u>

Is used to change style applications for each OS.

#### <u>html.OS-*NAME*-*VERSION*</u>

Is used to change style applications for each version of OSs.

Behavior checks on browsers
---------------------------

Test page is: [test/web/index.html](test/web/index.html). 

### Platforms already checked

#### macOS

| Safari | Chrome | Firefox| Vivaldi|
|--------|--------|--------|--------|
|&#x2713;|&#x2713;|&#x2713;|&#x2713;|

#### Linux

| Chrome | Firefox| Vivaldi|
|--------|--------|--------|
|&#x2713;|&#x2713;|&#x2713;|

#### Windows 10

| Chrome | Firefox| Vivaldi| Edge   | IE11   |
|--------|--------|--------|--------|--------|
|&#x2713;|&#x2713;|&#x2713;|&#x2713;|&#x2713;|

#### Windows 8.1

| Chrome | Firefox| Vivaldi| IE11   |
|--------|--------|--------|--------|
|&#x2713;|&#x2713;|&#x2713;|&#x2713;|

#### Windows 7

| Chrome | Firefox| Vivaldi| IE11   |
|--------|--------|--------|--------|
|&#x2713;|&#x2713;|&#x2713;|&#x2713;|


License
-------
Copyright (C) 2016-2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/xslet/platform
[io-image]: http://img.shields.io/badge/HP-github.io-ffbbbb.svg
[io-url]: https://xslet.github.io/platform/
[npm-image]: http://img.shields.io/badge/npm-v0.1.4-blue.svg
[npm-url]: https://www.npmjs.org/package/@xslet/platform/
[mit-image]: http://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[coverage-image]: https://coveralls.io/repos/github/xslet/platform/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/xslet/platform?branch=master
