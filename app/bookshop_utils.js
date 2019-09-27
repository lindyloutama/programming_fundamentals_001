function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(first, last) {
    return (first + " " + last);
}

function makeHalfPrice(price) {
    return (price / 2);
}

function countBooks(books) {
    return (books.length);
}

function isInStock(book) {
  if(book >= 1) {
    return true
} else {
    return false
 };
};

function getTotalOrderPrice(price, quantity) {
    return ((price * quantity) * 1.2)
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice,
};