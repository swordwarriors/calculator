function add(num1,num2){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    return num1 + num2
}

function subtract(num1,num2){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    return num1 - num2
}


function multiply(num1,num2){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    return num1 * num2
}
function divide(num1,num2){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    return num1 / num2
}

function operate(num1,operator,num2){
    //i want to take the operator to know which operation to do
    //i.e when it is a + do a add...etc
    
    if(operator ==='+'){
        return add(num1,num2)
    }
    if(operator ==='-'){
        return subtract(num1,num2)
    }
    if(operator ==='x'){
        return multiply(num1,num2)
    }
    if(operator ==='/'){
        return divide(num1,num2)
    }
}
function display(num){
    document.getElementById("dispText").innerHTML = num;
}

//might delete if i was not able to make it work
// function getButton(e){ //determine what was p
    
//     if(e === '+' || e.id === '-' || e.id === 'x' || e.id === '/' ){
//         operator = e.id
//         console.log("this is the operator: " + operator)
//         return;
//     }
//     if(operator ===undefined){
//         firstNum = firstNum+e.id;

//     }else{
//         secondNum = secondNum+e.id
//     }
//     console.log("this is the first num: " + firstNum)
//     console.log("this is the second num: "+secondNum)
//     return;

// } 


let firstNum ="";
let secondNum = "";
let operator;
let dispValue;
//i want to display the value when the user clicks a button
//i want to first identify which button was pressed
//after identifying it get the number from the key
//listen to all the keys
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click',()=>{
    if(button.id === '='){
        dispValue = operate(firstNum,operator,secondNum)
        display(dispValue)
        return;
    }
    if(button.id === '+' || button.id === '-' || button.id === 'x' || button.id === '/' ){
        operator = button.id
        console.log("this is the operator: " + operator)
        return;
    }
    if(operator ===undefined){
        firstNum = firstNum+button.id;
        
    }else{
        secondNum = secondNum+button.id
    }
    console.log("this is the first num: " + firstNum)
    console.log("this is the second num: "+ secondNum)
    return;
  })
});






//to delete later fo debugging puproses
// a = prompt('enter first number')
// b = prompt('enter second number')
// a = parseInt(a)
// b = parseInt(b)
// console.log(add(a,b))
// console.log(multiply(a,b))
// console.log(subtract(a,b))
// console.log(divide(a,b))