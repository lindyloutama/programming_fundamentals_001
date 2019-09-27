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
  test("returns 50% when passed price", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});

describe("utils.countBooks", () => {
  test("returns the total number of books in the array", () => {
    expect(utils.countBooks([])).toBe(0);
  }); 
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock or returns false if there are no books available", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
  
    expect(utils.isInStock(book)).toBe(false);
  });
 });

 describe("utils.getTotalOrderPrice", () => {
   test("returns the total price with VAT applied", () => {
     expect(utils.getTotalOrderPrice(10, 2)).toBe(24);
   });
 });