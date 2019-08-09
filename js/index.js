const display=document.querySelector('.display');
const digits=document.querySelector('.digits');
for(let i=0;i<10;i++) {
   const btn=document.createElement('button');
   btn.innerHTML=i;
   digits.appendChild(btn);
}
let openingCount=0;
let closingCount=0;
const digitButtons=document.querySelectorAll('.digits button');
const operatorButtons=document.querySelectorAll('.operators button');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operatorPressed));
digitButtons.forEach(digitButton => digitButton.addEventListener('click', digitPressed))
var equation=[];
function digitPressed(e) {
  e.preventDefault();
  equation.push(e.target.innerText);
  display.value='';
  display.value=equation.join('');
}
function operatorPressed(e) {
  if(equation.length>0 && e.target.innerText!='sqrt') {
     if(parseInt(equation[equation.length-1])) {
        equation.push(e.target.innerText);
    } else if(equation[equation.length-1]==0) {
       equation.push(e.target.innerText);
    } else if (equation[equation.length-1]!=')') {
       equation[equation.length-1]=e.target.innerText;
    } else {
        equation.push(e.target.innerText);
    }
  }
   display.value=equation.join('')
}
const delButton=document.querySelector('.delete');
delButton.addEventListener('click', delPressed);
function delPressed() {
    display.value='';
    equation=[];
    openingCount=0;
    closingCount=0;
}
const equalButton=document.querySelector('.equal');
equalButton.addEventListener('click', equalPressed);
function equalPressed() {
  if(closingCount!=openingCount) {
      alert('Missing bracket');
      delPressed();
}
  if(isNaN(equation[equation.length-1])){
     equation.pop();
     display.value=equation.join('');
  }
  let res=eval(display.value);
  if (res=='Infinity') {
      alert('You cannot divide by zero');
      delPressed();
  } else {
  display.value=res;
  equation=[res];
  }
}
const sqrtButton=document.querySelector('.sqrt');
sqrtButton.addEventListener('click', sqrtPressed);
function sqrtPressed() {
    if(isNaN(equation[equation.length-1])){
       equation.pop();
       display.value=equation.join('');
    }
    let num=eval(display.value);
    let res=Math.sqrt(parseInt(num) );
    display.value=res;
    equation=[res];
}
const openBracketButton=document.querySelector('.openBracket');
const closeBracketButton=document.querySelector('.closeBracket');
openBracketButton.addEventListener('click',openBracketPressed);
closeBracketButton.addEventListener('click',closeBracketPressed);
function openBracketPressed() {
    if(parseInt(equation[equation.length-1])) {
    equation.push('*');
    }
    equation.push('(');
    openingCount++;
    display.value=equation.join('');
  }
function closeBracketPressed() {
    if(isNaN(equation[equation.length-1])) {
    equation[equation.length-1]=')';
    }
    else {equation.push(')');
    }
    closingCount++;
    display.value=equation.join('');
}
const squareButton=document.querySelector('.square');
squareButton.addEventListener('click',squarePressed);
function squarePressed(){
    if(isNaN(equation[equation.length-1])){
       equation.pop();
       display.value=equation.join('');
    }
   let num=eval(display.value);
   let res=num*num;
   display.value=res;
   equation=[res];
}
