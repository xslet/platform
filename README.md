# [@xslet/platform][repo-url] [![Github.io][io-image]][io-url] [![NPM version][npm-image]][npm-url] [![MIT License][mit-image]][mit-url] [![Coverage Status][coverage-image]][coverage-url]

Gets platform informations of a Web browser.

## Install

Load this package in a browser:

```html
<script src="xslet.platform.min.js"></script>
```

## Usage

Get platform informations:

```js
// On Firefox 48.0 and Window 10.0
xslet.platform.ua.name      // => 'FIREFOX'
xslet.platform.ua.version   // => '48'
xslet.platform.ua.FIREFOX   // => true
xslet.platform.ua.MSIE      // => false
xslet.platform.os.name      // => 'WINNT'
xslet.platform.os.version   // => '10.0'
xslet.platform.os.WINNT     // => true
xslet.platform.os.LINUX     // => false
```

Write CSS for each platform:

```css
html.UA-FIREFOX P { background-color: red }       /* for Firefox */
html.UA-FIREFOX-48 P { background-color: yellow } /* for Firefox 48 */
html.OS-WINNT P { background-color: blue }        /* for Windows */
html.OS-WINNT-10_0 P { background-color: cyan }   /* for Windows 10.0 */
```

## API

This package provides API documents on [Github.io](https://xslet.github.io/platform/index.html) or docs/index.html in this package.

## Checked

This package has been checked the behavior by using [this pages](https://xslet.github.io/platform/test.html) on the following platforms: 

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:| 
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |

##License

Copyright (C) 2016-2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/xslet/platform
[io-image]: http://img.shields.io/badge/HP-github.io-ff8888.svg
[io-url]: https://xslet.github.io/platform/
[npm-image]: http://img.shields.io/badge/npm-v0.1.5-blue.svg
[npm-url]: https://www.npmjs.org/package/@xslet/platform/
[mit-image]: http://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[coverage-image]: https://coveralls.io/repos/github/xslet/platform/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/xslet/platform?branch=master
