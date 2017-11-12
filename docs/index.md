# [@xslet/platform][repo-url] ver.0.2 - API document

----

## API for Javascript

### <u>xslet.platform.ua.name</u>

The browser name in upper case characters.
(ex. 'FIREFOX', 'MSIE', 'CHROME').

**Type:** string

### <u>xslet.platform.ua.version</u>

The browser version which concatenates natural numbers by dots.
(ex. '48', '10.0').

**Type:** string

### <u>xslet.platform.ua.*NAME*</u>

The flag of which the name is the browser name in upper case.

**Type:** boolean

### <u>xslet.platform.os.name</u>

The OS name in upper case characters.
(ex. 'WINNT', 'LINUX', 'IPHONE')

**Type:** string

### <u>xslet.platform.os.version</u>

The OS version which concatenates natural numbers by dots.
(ex. '48', '10.0').

**Type:** string

### <u>xslet.platform.os.*NAME*</u>

The flag of which the name is the OS name in upper case.

**Type:** boolean

### <u>xslet.platform.ua.lt(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is less than the specified version.

**Type:** boolean

### <u>xslet.platform.ua.lte(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is less than or equal to the specified version.

**Type:** boolean

### <u>xslet.platform.ua.gt(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is greater than the specified version.

**Type:** boolean

### <u>xslet.platform.ua.gte(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is greater than or equal to the specified version.

**Type:** boolean

### <u>xslet.platform.ua.eq(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is equal to the specified version.

**Type:** boolean

### <u>xslet.platform.ua.ne(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is not equal to the specified version.

**Type:** boolean

### <u>xslet.platform.os.lt(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the OS is less than the specified version.

**Type:** boolean

### <u>xslet.platform.os.lte(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the OS is less than or equal to the specified version.

**Type:** boolean

### <u>xslet.platform.os.gt(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the OS is greater than the specified version.

**Type:** boolean

### <u>xslet.platform.os.gte(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the OS is greater than or equal to the specified version.

**Type:** boolean

### <u>xslet.platform.os.eq(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the OS is equal to the specified version.

**Type:** boolean

### <u>xslet.platform.os.ne(*NAME*, *VERSION*)</u>

Compares the current browser to the given name and version.

#### Parameters:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| *NAME*    | string | The browser name in upper case characters. |
| *VERSION* | string | The browser version which concatenates natural numbers by dots. |

#### Returns:

Returns true if the browser is not equal to the specified version.

**Type:** boolean


## API for CSS

### <u>html.UA-*NAME*</u>

Is used to change style applications for each browser.

### <u>html.UA-*NAME*-*VERSION*</u>

Is used to change style applications for each version of browsers.

### <u>html.OS-*NAME*</u>

Is used to change style applications for each OS.

### <u>html.OS-*NAME*-*VERSION*</u>

Is used to change style applications for each version of OSs.


----
[repo-url]: https://github.com/xslet/platform/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
