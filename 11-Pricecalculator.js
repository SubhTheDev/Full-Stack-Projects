//discount calculation
function calculateDiscount(price, discountPercent) {
  const priceAfterDiscount = price - price * (discountPercent / 100);
  return priceAfterDiscount;
}

//tax calculation
function calculateTax(priceAfterDiscount, taxPercent) {
  const priceAfterTax =
    priceAfterDiscount + priceAfterDiscount * (taxPercent / 100);
  return priceAfterTax;
}

//finalPrice calculation
function calculateFinalPrice(price, discountPercent, taxPercent) {
  const priceAfterDiscount = calculateDiscount(price, discountPercent);
  const finalPrice = calculateTax(priceAfterDiscount, taxPercent);
  return `price: $${price}, discount: ${discountPercent}, tax: ${taxPercent}, finalPrice: $${finalPrice}`;
}

//output
console.log(calculateFinalPrice(100, 20, 10));
console.log(calculateFinalPrice(200, 25, 5));
console.log(calculateFinalPrice(50, 0, 10));
