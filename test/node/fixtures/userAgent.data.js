var userAgentList = [
  {
    userAgent: '',
    ua: { name: 'UNKNOWN', version: '' },
    os: { name: 'UNKNOWN', version: '' },
  },
  {
    userAgent: 'AAA BBB CCC 12.3',
    ua: { name: 'UNKNOWN', version: '' },
    os: { name: 'UNKNOWN', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
    ua: { name: 'EDGE', version: '13' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
    ua: { name: 'EDGE', version: '13' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; Touch; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
    ua: { name: 'MSIE', version: '11' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; Touch)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0; Touch)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Win64; x64; Trident/6.0)',
    ua: { name: 'MSIE', version: '10' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
    ua: { name: 'MSIE', version: '9' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
    ua: { name: 'MSIE', version: '9' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)',
    ua: { name: 'MSIE', version: '9' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)',
    ua: { name: 'MSIE', version: '9' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; WOW64; Trident/5.0)',
    ua: { name: 'MSIE', version: '9' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Win64; x64; Trident/5.0)',
    ua: { name: 'MSIE', version: '9' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; WOW64; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Win64; x64; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '5.2' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Win64; x64; Trident/4.0)',
    ua: { name: 'MSIE', version: '8' },
    os: { name: 'WINNT', version: '5.2' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)',
    ua: { name: 'MSIE', version: '7' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0; SLCC1)',
    ua: { name: 'MSIE', version: '7' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Win64; x64; Trident/4.0; SLCC1)',
    ua: { name: 'MSIE', version: '7' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    ua: { name: 'MSIE', version: '7' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2)',
    ua: { name: 'MSIE', version: '7' },
    os: { name: 'WINNT', version: '5.2' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; Win64; x64)',
    ua: { name: 'MSIE', version: '7' },
    os: { name: 'WINNT', version: '5.2' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
    ua: { name: 'MSIE', version: '6' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; WOW64; SV1)',
    ua: { name: 'MSIE', version: '6' },
    os: { name: 'WINNT', version: '5.2' },
  },
  {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; x64; SV1)',
    ua: { name: 'MSIE', version: '6' },
    os: { name: 'WINNT', version: '5.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 5.1; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'MACOS', version: '10.11' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'MACOS', version: '10.10' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'MACOS', version: '10.9' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0',
    ua: { name: 'FIREFOX', version: '43' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) FxiOS/1.2 Mobile/13C75 Safari/601.1.46',
    ua: { name: 'FIREFOX', version: '' },
    os: { name: 'IPHONE', version: '9.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) FxiOS/5.1 Mobile/14A403 Safari/602.1.50',
    ua: { name: 'FIREFOX', version: '' },
    os: { name: 'IPHONE', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'MACOS', version: '10.11' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'MACOS', version: '10.10' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'MACOS', version: '10.9' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/50.0.2661.95 Mobile/13F69 Safari/601.1.46',
    ua: { name: 'CHROME', version: '50' },
    os: { name: 'IPHONE', version: '9.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Safari/537.36',
    ua: { name: 'CHROME', version: '47' },
    os: { name: 'ANDROID', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.2) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.2) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.1; Win64; x64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.0; WOW64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Opera/9.80 (Windows NT 6.0; Win64; x64) Presto/2.12.388 Version/12.17',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'MACOS', version: '10.11' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'MACOS', version: '10.10' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'MACOS', version: '10.9' },
  },
  {
    userAgent: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.10.5) Presto/2.12.388 Version/12.16',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'MACOS', version: '10.10' },
  },
  {
    userAgent: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.9.5) Presto/2.12.388 Version/12.16',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'MACOS', version: '10.9' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50',
    ua: { name: 'OPERA', version: '34' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Opera/9.80 (X11; Linux i686) Presto/2.12.388 Version/12.16',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Opera/9.80 (X11; Linux x86_64) Presto/2.12.388 Version/12.16',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Opera/9.80 (X11; Linux i686; Edition Linux Mint) Presto/2.12.388 Version/12.16',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Opera/9.80 (X11; Linux x86_64; Edition Linux Mint) Presto/2.12.388 Version/12.16',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) OPiOS/12.1.1.98980 Mobile/13C75 Safari/9537.53',
    ua: { name: 'OPERA', version: '12' },
    os: { name: 'IPHONE', version: '9.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'MACOS', version: '10.11' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'MACOS', version: '10.10' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/537.86.3',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'MACOS', version: '10.9' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPHONE', version: '9.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPHONE', version: '9.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPHONE', version: '9.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPHONE', version: '9.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPHONE', version: '8.4' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPHONE', version: '8.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPHONE', version: '8.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPHONE', version: '8.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPHONE', version: '8.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
    ua: { name: 'SAFARI', version: '7' },
    os: { name: 'IPHONE', version: '7.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53',
    ua: { name: 'SAFARI', version: '7' },
    os: { name: 'IPHONE', version: '7.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_6 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B500 Safari/8536.25',
    ua: { name: 'SAFARI', version: '6' },
    os: { name: 'IPHONE', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A551 Safari/8536.25',
    ua: { name: 'SAFARI', version: '6' },
    os: { name: 'IPHONE', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPAD', version: '9.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPAD', version: '9.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPAD', version: '9.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPAD', version: '8.4' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPAD', version: '8.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPAD', version: '8.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPAD', version: '8.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPAD', version: '8.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
    ua: { name: 'SAFARI', version: '7' },
    os: { name: 'IPAD', version: '7.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53',
    ua: { name: 'SAFARI', version: '7' },
    os: { name: 'IPAD', version: '7.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 6_1_6 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B500 Safari/8536.25',
    ua: { name: 'SAFARI', version: '6' },
    os: { name: 'IPAD', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 6_0_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A550 Safari/8536.25',
    ua: { name: 'SAFARI', version: '6' },
    os: { name: 'IPAD', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10',
    ua: { name: 'SAFARI', version: '4' },
    os: { name: 'IPAD', version: '3.2' },
  },
  {
    userAgent: 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10',
    ua: { name: 'SAFARI', version: '4' },
    os: { name: 'IPAD', version: '3.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPOD', version: '9.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPOD', version: '9.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1',
    ua: { name: 'SAFARI', version: '9' },
    os: { name: 'IPOD', version: '9.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPOD', version: '8.4' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPOD', version: '8.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPOD', version: '8.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPOD', version: '8.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML,like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
    ua: { name: 'SAFARI', version: '8' },
    os: { name: 'IPOD', version: '8.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
    ua: { name: 'SAFARI', version: '7' },
    os: { name: 'IPOD', version: '7.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53',
    ua: { name: 'SAFARI', version: '7' },
    os: { name: 'IPOD', version: '7.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_6 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B500 Safari/8536.25',
    ua: { name: 'SAFARI', version: '6' },
    os: { name: 'IPOD', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (iPod; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25',
    ua: { name: 'SAFARI', version: '6' },
    os: { name: 'IPOD', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '10.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.3' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.2' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '6.0' },
  },
  {
    userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'WINNT', version: '5.1' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'MACOS', version: '10.11' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'MACOS', version: '10.10' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'MACOS', version: '10.9' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37',
    ua: { name: 'VIVALDI', version: '1' },
    os: { name: 'LINUX', version: '' },
  },
  {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1',
    ua: { name: 'PHANTOMJS', version: '2' },
    os: { name: 'MACOS', version: '' },
  },
];

module.exports = userAgentList;
