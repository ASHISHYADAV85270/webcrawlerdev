
/* Normalize the URL to remove the trailing slash and convert the URL to lowercase
Examples:
https://boot.dev -> https://boot.dev
http://boot.dev -> http://boot.dev
https://Boot.dev -> https://boot.dev
*/
function normalizeUrl(urlString) {
    const urlObj = new URL(urlString);

    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.endsWith("/")) {
        return hostPath.slice(0, -1);
    }
    return hostPath;
}

module.exports = {
    normalizeUrl
}