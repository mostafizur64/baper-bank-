// step 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //sept 2
    //get the deposit amount form the deposit input field 
    const newDepositAmountString = document.getElementById('deposit-inputField').value;
    const  newDepositAmount =parseFloat(newDepositAmountString);
    //step 3
    // get the current deposit total 
    // for non-input(element other than input, textarea) use inngerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4 add number to set the total deposit
    const currentDepositAmount=previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText = currentDepositAmount;

    // step 5 
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceElementString = totalBalanceElement.innerText;
    const previousTotalBalanceElement =parseFloat(previousTotalBalanceElementString);

   const currentTotalBalance = previousTotalBalanceElement + newDepositAmount;
   totalBalanceElement.innerText = currentTotalBalance;



})