let emiChart;

function calculateEMI() {
    let loanAmount = Number(document.getElementById("loan-amount").value);
    let annualInterestRate = Number(document.getElementById("interest-rate").value);
    let loanTenure = Number(document.getElementById("loan-tenure").value);

    let monthlyInterestRate = (annualInterestRate / 100) / 12;
    let totalMonths = loanTenure * 12;

    if (loanAmount > 0 && annualInterestRate > 0 && loanTenure > 0) {
        let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
        let totalInterest = (emi * totalMonths) - loanAmount;

        document.getElementById("monthly-emi").innerText = `₹${emi.toFixed(2)}`;
        document.getElementById("total-interest").innerText = `₹${totalInterest.toFixed(2)}`;

        updateChart(loanAmount, totalInterest);
    } else {
        alert("Please enter valid values!");
    }
}

function updateChart(loanAmount, totalInterest) {
    let ctx = document.getElementById("emiChart").getContext("2d");

    if (emiChart) {
        emiChart.destroy(); // Destroy previous chart before creating a new one
    }

    emiChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Loan Amount", "Total Interest"],
            datasets: [{
                data: [loanAmount, totalInterest],
                backgroundColor: ["#ff6b81", "#6a0572"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}
