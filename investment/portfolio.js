let investments = {};
let totalInvestment = 0;
let portfolioChart;

function addInvestment() {
    let type = document.getElementById("investment-type").value;
    let amount = Number(document.getElementById("investment-amount").value);

    if (amount > 0) {
        if (investments[type]) {
            investments[type] += amount;
        } else {
            investments[type] = amount;
        }

        totalInvestment += amount;
        document.getElementById("total-investment").innerText = `₹${totalInvestment}`;
        
        updateChart();
    } else {
        alert("Enter a valid investment amount!");
    }
}

function updateChart() {
    let ctx = document.getElementById("portfolioChart").getContext("2d");

    if (portfolioChart) {
        portfolioChart.destroy();
    }

    portfolioChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(investments),
            datasets: [{
                data: Object.values(investments),
                backgroundColor: ["#ff6b81", "#6a0572", "#ffb6c1", "#ffd700", "#6ec6ff"]
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
