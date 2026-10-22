function isPaid(order) {
  return order.payment.status === "paid";
}

function hasShipped(order) {
  return order.shipping.status === "shipped";
}

function getDeliveryMessage(order) {
  const message = hasShipped(order)
    ? `Order shipped, Estimated delivery : ${order.shipping.estimatedDelivery}`
    : `Order has not shipped yet`;
  return message;
}

function needsAttention(order) {
  return !hasShipped(order) || !isPaid(order);
}

function createOrderSummary(order) {
  return {
    id: order.id,
    customerName: order.customer.name,
    paid: isPaid(order),
    shipped: hasShipped(order),
    itemCount: order.items.reduce((acc, cur) => acc + cur.quantity, 0),
    deliveryMessage: getDeliveryMessage(order),
    needsAttention: needsAttention(order),
  };
}

const order = {
  id: "ORD-1001",
  customer: {
    name: "Ava Stone",
    email: "ava@example.com",
  },
  payment: {
    status: "paid",
  },
  shipping: {
    status: "shipped",
    estimatedDelivery: "2026-06-18",
  },
  items: [
    { name: "Notebook", quantity: 2 },
    { name: "Pen Set", quantity: 1 },
  ],
};

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
  ...order,
  payment: { status: "unpaid" },
  shipping: { status: "processing", estimatedDelivery: "2026-06-18" },
};

console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));
