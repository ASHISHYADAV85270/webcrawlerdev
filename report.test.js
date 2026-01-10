const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
    const input = {
        'https://wagslane.dev/path': 6,
        'https://wagslane.dev/wsdq': 1,
        'https://wagslane.dev/wq': 2,
    }
    const actual = sortPages(input);
    const expected = [
        ["https://wagslane.dev/path", 6],
        ['https://wagslane.dev/wq', 2],
        ['https://wagslane.dev/wsdq', 1]
    ]
    expect(actual).toEqual(expected);
});
