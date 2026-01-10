const { JSDOM } = require("jsdom");
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

// JSDOM -> JSDOM give us a DOM object from a HTML string
function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll("a"); // assuming all links are in <a> tags
    for(const linkElement of linkElements){
        const href = linkElement.href;
        // const normalizedHref = normalizeUrl(href);
        // urls.push(normalizedHref);
        urls.push(href);
    }
    return urls;
}

module.exports = {
    normalizeUrl,
    getURLsFromHTML
}