function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function makeHalfPrice(price) {
    return price - (price / 2);
}
function countBooks(books) {
    return books.length;
}

function isInStock(book) {
    return (book.quantity > 0)? true : false;
    
    //Another option for if
    // if(book.quantity > 0){
    //     return true
    // }
    // else false

}

function getTotalOrderPrice(price, quantity) {
    return addVAT( price * quantity );
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice,
};

