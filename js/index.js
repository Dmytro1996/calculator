const display=document.querySelector('.display');
const digits=document.querySelector('.digits');
for(let i=0;i<10;i++) {
   const digit=document.createElement('BUTTON');
   digit.innerHTML=i;
   digits.appendChild(digit);
}
const btns=document.querySelector('.digits button, .operators buttons');
btns.forEach(btn=>addEventListener('click',buttonPressed()));
var equation=[''];
function buttonPressed() {
  if(parseInt(btns.innerHTML)=true) {
      equation[equation.length-1]+=btns.innerHTML;
  } else {
      if(btns.innerHTML!='=') {
          equation.push(btns.innerHTML);
      } else {
          let res=equation.join('');
          display.textContent=res;
      }
  }
}