function calculateSIP() {
    let monthlyInvestment = Number(document.getElementById("monthly-investment").value);
    let returnRate = Number(document.getElementById("return-rate").value) / 100 / 12;
    let investmentDuration = Number(document.getElementById("investment-duration").value) * 12;

    if (monthlyInvestment > 0 && returnRate > 0 && investmentDuration > 0) {
        let futureValue = monthlyInvestment * ((Math.pow(1 + returnRate, investmentDuration) - 1) / returnRate) * (1 + returnRate);
        document.getElementById("future-value").innerText = `₹${futureValue.toFixed(2)}`;
    } else {
        alert("Please enter valid values!");
    }
}
