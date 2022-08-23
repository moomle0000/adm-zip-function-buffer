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
