const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});



describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test ("returns half price", () => {
  expect(utils.makeHalfPrice(100)).toBe(50);
});
});

describe("utils.countBooks", () => {
  test ("returns number of books", () => {
  expect(utils.countBooks(["Book1", "Book2", "Book3"])).toBe(3);
});
});
