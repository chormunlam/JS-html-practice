let num1 =8;
let num2=2;
document.getElementById("num1-el").textContent =num1;
document.getElementById("num2-el").textContent =num2;
let sumEl=document.getElementById("sum-el")
function add(){
  result=num1+num2;

  sumEl.textContent="Result: "+result;
}

function sub(){
  result=num1-num2;

  sumEl.textContent="Result: "+result;
  
}

function div(){
  result=num1/num2;

  sumEl.textContent="Result: "+result;
  
}

function mutl(){
  result=num1 * num2;

  sumEl.textContent="Result: "+result;
  
}