let buttons = document.querySelectorAll('.button');
const inputValue = document.querySelector('.input');

function display(input){
  inputValue.value += input;
}
function clearDisplay(){
  inputValue.value = '';
  for(button of buttons){
    button.disabled = false;
  }
}
function calculate(){
  try{
    inputValue.value = eval(inputValue.value);
  }
  catch(error){
    inputValue.value = 'Syntax Error'
  }
  for(button of buttons){
    button.disabled = true;
  }
}