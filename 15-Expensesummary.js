//calulates totalExpense
function calculateTotal(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

//calculate totalExpense by category
function calculateCategoryTotal(expenses, category) {
  return expenses
    .filter((expense) => expense.category === category)
    .reduce((expensesTotal, expense) => expensesTotal + expense.amount, 0);
}

//returns the largestExpense
function findLargestExpense(expenses) {
  return expenses.reduce((max, expense) => Math.max(max, expense.amount), 0);
}

//creates the expenseSummary
function createExpenseSummary(expenses) {
  return `total: $${calculateTotal(expenses)}, foodTotal: $${calculateCategoryTotal(expenses, "food")}, transportTotal: $${calculateCategoryTotal(expenses, "transport")}, largestExpense: ${findLargestExpense(expenses)}`;
}

//input
const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

//output
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, "food"));
console.log(calculateCategoryTotal(expenses, "health"));
console.log(findLargestExpense(expenses));
