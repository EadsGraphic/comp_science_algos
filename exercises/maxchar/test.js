const maxChar = require("./index");

test("maxChar Function Exists", () => {
  expect(typeof maxChar).toEqual("function");
});

test("maxChar returns most used character", () => {
  expect(maxChar("aabc")).toEqual("a");
});

test("maxChar returns most used character", () => {
  expect(maxChar("11##%%%")).toEqual("%");
});

test("maxChar returns most used character", () => {
  expect(maxChar("aabbcc")).toEqual("a");
});

test("maxChar returns most used character", () => {
  expect(maxChar("aa      bbcc")).toEqual(" ");
});
