const { crawlPage } = require("./crawl.js")
const { printReport } = require("./report.js")
const express = require("express");
const { config } = require("dotenv")
const app = express();
config({
    path: ".env"
});

const PORT = process.env.PORT || 5000;


app.use(express.json());


app.get('/', async (req, res) => {
    const  baseURL = req.body.baseURL;
    const pagesMapResult = await crawlPage(baseURL, baseURL, {});
    res.json(pagesMapResult)
})


// JUST FOR TESTINT PURPOSE
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

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})