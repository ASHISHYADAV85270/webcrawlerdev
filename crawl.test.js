const { normalizeUrl } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeUrl strip Protocol", () => {
    const input = "https://www.google.com/path"; // Input URL
    const actual = normalizeUrl(input);
    const expected = "www.google.com/path";
    expect(actual).toBe(expected);
});


test("normalizeUrl strip Trailing Slash", () => {
    const input = "https://www.google.com/path/"; // Input URL
    const actual = normalizeUrl(input);
    const expected = "www.google.com/path";
    expect(actual).toBe(expected);
});


test("normalizeUrl capitals", () => {
    const input = "https://www.Google.com/path/"; // Input URL
    const actual = normalizeUrl(input);
    const expected = "www.google.com/path";
    expect(actual).toBe(expected);
});


test("normalizeUrl strip http", () => {
    const input = "http://www.google.com/path/"; // Input URL
    const actual = normalizeUrl(input);
    const expected = "www.google.com/path";
    expect(actual).toBe(expected);
});