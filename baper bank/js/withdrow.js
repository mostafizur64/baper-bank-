document.getElementById('btn-withdraw').addEventListener('click',function(){
    // sept -2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    

    // step -3
    const withdrawTotalAmount = document.getElementById('total-withdraw');
    const withdrawTotalAmountString = withdrawTotalAmount.innerText;
    const newWithdrawAmount = parseFloat(withdrawTotalAmountString);
     
    // step -4
   

    const currentWithdrawTotal = newWithDrawAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText =currentWithdrawTotal;

    // step - 5
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const newTotalBalance = parseFloat(totalBalanceElementString);

    // if(newTotalBalance < newWithDrawAmount){
    //     alert('hobe nah!');
    //     return;
    // }
    // withdrawField.value = '';
    // step -6
    const  withdrawBalance = newTotalBalance - currentWithdrawTotal;
    totalBalanceElement.innerText = withdrawBalance;
    
    // step  - 7 
 
 
})