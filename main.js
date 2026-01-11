const { crawlPage } = require("./crawl.js")
const { printReport } = require("./report.js")
const express = require("express");
const { config } = require("dotenv")
const cors = require("cors");
const app = express();
config({
    path: ".env"
});
app.use(cors({
    origin: [
        "https://web-crawler-ashishdev.netlify.app",
        "http://127.0.0.1:5500",   // local dev
        "http://localhost:5500"   // local dev
    ],
    methods: ["GET"],
}));
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hey Welcome to Web Crawler By Ashish.")
})

app.get('/crawl', async (req, res) => {
    const { baseURL } = req.query;

    if (!baseURL) {
        return res.status(400).json({ error: "baseURL is required" });
    }
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