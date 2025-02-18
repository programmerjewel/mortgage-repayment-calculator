

const calculate = () =>{
  document.getElementById('default-content').style.display = 'none';
  document.getElementById('result-content').style.display = 'block';

  const mortgageAmount = document.getElementById('mortgage-amount').value;
  const time = document.getElementById('mortgage-term').value;
  const interestRate = document.getElementById('interest-rate').value;
  

  const monthlyInterestRate = interestRate / 100 /12;
  const numberOfPayments = time * 12;

  const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;
  let monthlyRepayment = 0;
  let totalRepayment = 0;


      if (mortgageType === 'repayment') {
        monthlyRepayment = (mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        totalRepayment = monthlyRepayment * numberOfPayments;

    } else if (mortgageType === 'interest_only') {
        monthlyRepayment = mortgageAmount * monthlyInterestRate;  // Interest-only calculation
        totalRepayment = monthlyRepayment * numberOfPayments;
    } else {
      console.error("Invalid mortgage type selected.");
      return;
    }


  const monthlyRepaymentElement = document.getElementById("m-repayment");
    if (monthlyRepaymentElement) {
        monthlyRepaymentElement.textContent = monthlyRepayment.toFixed(2); // Add £ symbol
    } else {
        console.error("Monthly repayment element not found!");
    }

    const totalRepaymentElement = document.getElementById("t-repayment");
    if (totalRepaymentElement) {
        totalRepaymentElement.textContent = totalRepayment.toFixed(2); // Add £ symbol
    } else {
        console.error("Total repayment element not found!");
    }
}

const clearAll = () =>{
  document.getElementById('mortgage-amount').value = "";
  document.getElementById('mortgage-term').value= "";
  document.getElementById('interest-rate').value= "";
  document.getElementById("m-repayment").textContent ='';
  document.getElementById("t-repayment").textContent = '';
  
  document.getElementById('default-content').style.display = 'block';
  document.getElementById('result-content').style.display = 'none';
}



