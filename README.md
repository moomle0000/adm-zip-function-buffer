# adm-zip-function-buffer
adm-zip-function-buffer [![Build Status](https://api.travis-ci.org/Stuk/jszip.svg?branch=master)](https://travis-ci.org/cthackers/adm-zip) [![Code Climate](https://codeclimate.com/github/Stuk/jszip/badges/gpa.svg)](https://travis-ci.org/cthackers/adm-zip)
=====

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jszip.svg)](https://travis-ci.org/cthackers/adm-zip)

A library for creating, reading and editing .zip files with JavaScript, with a
lovely and simple API.

See https://raw.githubusercontent.com/moomle00000/adm-zip-function-buffer/main/index.js for all the documentation.

```javascript
async function extrDatae(url) {

    const body = await get(url)

    const buffer = Buffer.from(body)

    var zip = new AdmZip(body && buffer);
    var zipEntries = zip.getEntries();

    // search for "index.html" which should be there
    for (var i = 0; i < zipEntries.length; i++) {
        //console.log(zip.readAsText(zipEntries[i]));
        return zip.readAsText(zipEntries[i])
    }


}

```

License
-------

adm-zip is dual-licensed. You may use it under the MIT license *or* the LM
license. See [LICENSE](LICENSE).
