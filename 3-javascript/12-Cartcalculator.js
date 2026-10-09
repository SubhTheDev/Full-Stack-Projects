//calculates subtotal
function calculateSubtotal(items) {
  return items.reduce((accumulatedTotal, { price, quantity }) => {
    return accumulatedTotal + price * quantity;
  }, 0);
}

//calculates discount and substracts from subtotal
function calculateDiscount(subTotal, discountPercent) {
  const discount = subTotal * (discountPercent / 100);
  const amountAfterDiscount = subTotal - discount;
  return { discount, amountAfterDiscount };
}

//calculates tax and adds to the amountAfterDiscount
function calculateTax(amountAfterDiscount, taxPercent) {
  const tax = amountAfterDiscount * (taxPercent / 100);
  const finalAmount = amountAfterDiscount - tax;
  return { tax, finalAmount };
}

//displays the final result
function createCartSummary(items, discountPercent, taxPercent) {
  const subTotal = calculateSubtotal(items);
  const { discount, amountAfterDiscount } = calculateDiscount(
    subTotal,
    discountPercent,
  );
  const { tax, finalAmount } = calculateTax(amountAfterDiscount, taxPercent);
  return `subtotal: $${subTotal}, discount: $${discount}, tax: $${tax}, total: $${finalAmount}`;
}

//object
const cartItems = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 },
];
const singleItemCart = [{ name: "Mouse", price: 25, quantity: 2 }];

//output
console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
console.log(createCartSummary(singleItemCart, 0, 10));
