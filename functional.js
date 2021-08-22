function getInput(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInField = inputField.value;
    const value = parseFloat(valueInField);
    inputField.value = '';
    return value;

}
function updateTotal (fieldId, amount){
    
    const previousTotal = balancetext(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;

}
function balanceUpdate(amount, isAdding){
    
    const previousBalance = balancetext('balance-total')
    let newBalance;
    if(isAdding == true){
         newBalance = previousBalance + amount;
    }
    else{
         newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}
function balancetext(fieldId){
    const balance = document.getElementById(fieldId);
    const balanceText = balance.innerText;
    const value = parseFloat(balanceText);
    return value;
}



document.getElementById('deposit-btn').addEventListener('click', function(){
    const amount = getInput('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
    balanceUpdate(amount,true);
    }

});
// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const amount = getInput('withdraw-input');
    const balanceValue = balancetext('balance-total')
    if(amount > 0 && amount <= balanceValue){
        updateTotal('withdraw-total', amount);
        balanceUpdate(amount,false);
    }

})