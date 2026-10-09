const expenseName = document.getElementById("expenseName");
const amountInput = document.getElementById("amountInput");
const category = document.getElementById("category");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");

let expenses = [];

addExpenseBtn.addEventListener("click", function(){
const name = expenseName.value;
const amount = amountInput.value;
const selectedCategory = category.value;



expenses.push({
    name: name,
    amount: amount,
    category: selectedCategory
});
let total = 0;
expenseList.innerHTML = "";

expenses.forEach(function(expense,index){
    total += Number(expense.amount);
expenseList.innerHTML += `
    <p>
        ${expense.name} - ₹${expense.amount} - ${expense.category}
       <button onclick="deleteExpense(${index})">Delete</button>
    </p>
`;
});
totalAmount.innerHTML = `Total Expenses : ₹${total}`;

});
function deleteExpense(index) {
    expenses.splice(index, 1);
}