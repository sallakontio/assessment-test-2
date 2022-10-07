// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart total.
function calculateTotal(items) {
  let total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}

// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
function calculateAvg(items) {
  let total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total / items.length;
}

export { calculateTotal, calculateAvg };
