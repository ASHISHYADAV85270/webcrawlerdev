const { normalizeUrl } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeUrl strip Protocol", () => {
    const input = "https://www.google.com"; // Input URL
    const actual = normalizeUrl(input);
    const expected = "https://www.google.com";
    expect(actual).toBe(expected);
});