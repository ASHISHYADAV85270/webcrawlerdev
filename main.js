const { crawlPage } = require("./crawl.js")
const { printReport } = require("./report.js")

async function main() {
    if (process.argv.length < 3) {
        console.log('No Website Providesd');
        process.exit(1);
    }
    if (process.argv.length > 3) {
        console.log("Too many command line args")
        process.exit(1);
    }

    const baseURL = process.argv[2];
    console.log(`Started Crawling of ${baseURL}`);
    const pagesMapResult = await crawlPage(baseURL, baseURL, {});
    printReport(pagesMapResult)
}

main()