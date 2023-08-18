// 

// deposite ammount //

document.getElementById('deposite-btn').addEventListener('click', function(){
  // console.log('deposite button click')
// input element//
  const depositefield = document.getElementById('deposite-input');
  const newdepositevaluestring = depositefield.value;
  const newdepositevalue = parseFloat(newdepositevaluestring);
  console.log(newdepositevalue);
  // total element//
  const depositetotalelement = document.getElementById('deposite-total');
  const previousdepositetotalstring = depositetotalelement.innerText;
  const previousdepositetotal = parseFloat(previousdepositetotalstring);
  
  console.log(previousdepositetotal);
  
  const currentdepositetotal = previousdepositetotal + newdepositevalue;
  depositetotalelement.innerText =  currentdepositetotal;

  // current total balance////
   const balancetotalelement = document.getElementById('balance-total');
   const previousbalancetotalstring = balancetotalelement.innerText;
   const previousbalance = parseFloat(previousbalancetotalstring);
   const currentbalancetotal = previousbalance + newdepositevalue ;
   balancetotalelement.innerText = currentbalancetotal;

  depositefield.value = '';
})



// withdraw total ammount money ///

document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawfield = document.getElementById('withdraw-input');
  const withdrawfieldstring = withdrawfield.value;
  const newwithdraw = parseFloat(withdrawfieldstring);
  console.log(newwithdraw);

  const withdrawtotalfield = document.getElementById('withdraw-total');
  const withdrawtotalfieldstring = withdrawtotalfield.innerText
  const totalwithdraw = parseFloat(withdrawtotalfieldstring);
  console.log(totalwithdraw);
  const currentwithdraw = totalwithdraw + newwithdraw;
  withdrawtotalfield.innerText = currentwithdraw;
  console.log(typeof totalwithdraw);

 

  const totalbalancefield = document.getElementById('balance-total');
  const previouwithdrawbalance = totalbalancefield.innerText;
  const afterwithdrawbalance = parseFloat(previouwithdrawbalance);
  console.log(afterwithdrawbalance);
  const newbalanceafter = afterwithdrawbalance - newwithdraw;
  totalbalancefield.innerText = newbalanceafter; 

  withdrawfield.value = '';

})