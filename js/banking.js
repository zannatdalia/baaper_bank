document.getElementById('diposite-button').addEventListener('click',function(){
    const dipositeInput=document.getElementById('diposite-input');
    const newDepositeInput=dipositeInput.value;
    
    const depositeTotal =document.getElementById('deposite-total');
    const previousDepositeAmount=depositeTotal.innerText;
    const newDepositeTotal= parseFloat(newDepositeInput) +  parseFloat(previousDepositeAmount) ;
    depositeTotal.innerText=newDepositeTotal;
    // update balance
    const balanceTotal=document.getElementById('balance-total');
    const previousBalance=balanceTotal.innerText;
    const newBalance=parseFloat(previousBalance)+parseFloat(newDepositeInput);
    balanceTotal.innerText=newBalance;
    //clear input field
    dipositeInput.value='';
});
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const newWithdrawAmount= parseFloat(withdrawInput.value);
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawTotal= parseFloat(withdrawTotal.innerText) ;
    newWithdrawTotal=newWithdrawAmount+previousWithdrawTotal;
    withdrawTotal.innerText=newWithdrawTotal;
    // update balance
    const balanceTotal=document.getElementById('balance-total');
    const previousBalance=balanceTotal.innerText;
    const newBalance=parseFloat(previousBalance)-newWithdrawAmount;
    balanceTotal.innerText=newBalance;

    withdrawInput.value='';
}) 