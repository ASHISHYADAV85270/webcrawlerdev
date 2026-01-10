function printReport(pagesMap){
    console.log("==================================");
    console.log("REPORT");
    console.log("==================================");
    const sortedPages = sortPages(pagesMap)
    for(const page of sortedPages){
        const url = page[0];
        const hits= page[1];
        console.log(`Found ${hits} links to page: ${url}`);
    }
    console.log("==================================");
    console.log("END");
}


function sortPages(pagesMap) {
    const pagesArr = Object.entries(pagesMap);
    pagesArr.sort((a, b) => {
        aCount = a[1];
        bCount = b[1];
        return b[1] - a[1];
    })
    return pagesArr;
}

module.exports = {
    sortPages,
    printReport
}