
/* Normalize the URL to remove the trailing slash and convert the URL to lowercase
Examples:
https://boot.dev -> https://boot.dev
http://boot.dev -> http://boot.dev
https://Boot.dev -> https://boot.dev
*/
function normalizeUrl(urlString) {
    return urlString;
}

module.exports = {
    normalizeUrl
}