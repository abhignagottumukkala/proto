// Function to add new expense fields dynamically
function addExpense() {
    let expensesList = document.getElementById("expenses-list");

    let newExpense = document.createElement("div");
    newExpense.classList.add("expense-item");

    newExpense.innerHTML = `
        <input type="text" class="expense-name" placeholder="Expense name (e.g., Rent)">
        <input type="number" class="expense-amount" placeholder="Amount">
    `;

    expensesList.appendChild(newExpense);
}

// Function to calculate total expenses and savings
function calculateBudget() {
    let income = document.getElementById("income").value;
    let expenseItems = document.querySelectorAll(".expense-amount");

    let totalExpenses = 0;
    expenseItems.forEach(expense => {
        totalExpenses += Number(expense.value);
    });

    let savings = income - totalExpenses;

    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById("savings").innerText = savings >= 0 ? savings : "Over Budget!";

    let progress = document.getElementById("progress");
    let percentage = (savings / income) * 100;
    progress.style.width = percentage > 0 ? percentage + "%" : "0%";
}
