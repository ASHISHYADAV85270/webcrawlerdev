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
    for (const linkElement of linkElements) {
        // case for relative URL
        if (linkElement.href.charAt(0) === '/') {
            try {
                // validatin URL 
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with relative url : ${err.message}`)
            }
        } else {
            try {
                // validatin URL 
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`error with absoltute url : ${err.message}`)
            }
        }
    }
    return urls;
}


async function crawlPage(baseURL) {
    console.log(`acitvely crawling : ${baseURL}`);
    try {
        const resp = await fetch(baseURL);
        if (resp.status > 399) {
            console.log(`error in fetch with Status Code : ${resp.status} , For the Url : ${baseURL}`);
            return;
        }

        const contentType = resp.headers.get("content-type");
        if (!contentType.includes("text/html")) {
            console.log(`Non HTML tpye response , content-type: ${resp.contentType} , For the Url : ${baseURL}`);
            return;
        }
        console.log(await resp.text());
    } catch (err) {
        console.log(`error in fetch : ${err.message} , For the Url : ${baseURL}`);
    }
}

module.exports = {
    normalizeUrl,
    getURLsFromHTML,
    crawlPage
}