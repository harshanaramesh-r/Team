
let order = {
  customer: {
    name: "Ravi",
    phone: "9876543210",
    address: "Trichy"
  },
  items: [
    { name: "Apple", price: 30, quantity: 2 },
    { name: "Milk", price: 50, quantity: 1 }
  ],
  bill: {
    total: 110,
    payment: "UPI"
  },
  date: new Date()
};

// Save to database (example with MongoDB)
db.orders.insertOne(order);
