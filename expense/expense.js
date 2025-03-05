let expenses = [];

function addExpense() {
    let name = document.getElementById("expense-name").value;
    let amount = Number(document.getElementById("expense-amount").value);
    let category = document.getElementById("expense-category").value;
    let month = document.getElementById("expense-month").value;

    if (name && amount > 0) {
        let expense = { name, amount, category, month };
        expenses.push(expense);
        updateExpenseTable();
    } else {
        alert("Please enter a valid name and amount.");
    }
}

function updateExpenseTable() {
    let tableBody = document.getElementById("expense-table-body");
    tableBody.innerHTML = "";
    let monthlyTotals = {};
    let yearlyTotal = 0;

    expenses.forEach((expense, index) => {
        yearlyTotal += expense.amount;

        if (!monthlyTotals[expense.month]) {
            monthlyTotals[expense.month] = 0;
        }
        monthlyTotals[expense.month] += expense.amount;

        let row = `<tr>
            <td>${expense.name}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.month}</td>
            <td><button class="delete-btn" onclick="deleteExpense(${index})">❌</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    // Update yearly expenses
    document.getElementById("yearly-expenses").innerText = `₹${yearlyTotal}`;

    // Update selected month's expenses
    updateMonthlyExpense();
}

function updateMonthlyExpense() {
    let selectedMonth = document.getElementById("monthly-select").value;
    let monthlyTotal = expenses
        .filter(expense => expense.month === selectedMonth)
        .reduce((sum, expense) => sum + expense.amount, 0);

    document.getElementById("monthly-expenses").innerText = `₹${monthlyTotal}`;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseTable();
}


