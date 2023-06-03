function add(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    return num1 + num2
}

function subtract(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    return num1 - num2
}


function multiply(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    return num1 * num2
}
function divide(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if(num2 ===0){
     display("do not break my calculator!!!!!")
     
    }
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
    if((1/0) ===num){
        document.getElementById("dispText").innerHTML = "don't break my calculator!!!";    
    }else{
    document.getElementById("dispText").innerHTML = num;}
}
function continueOps(){
    
}
function reset(){
    firstNum=dispValue
    secondNum =""
    operator = undefined
    operationAssigned = false
}
function clear(){
    firstNum=""
    secondNum =""
    operator = undefined
    operationAssigned = false
    dispValue = 0
    display(dispValue)
}
function deleteDigit(){

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
let operationAssigned=false;
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

    //if the clear button is cleared call function clear
    if(button.id ==='clear'){
        clear()
        return;
    }




    

    if(operationAssigned && (button.id === '+' || button.id === '-' || button.id === 'x' || button.id === '/' )){ 
        //when the user clicks plus for the second time i want to do the first operation
        //then i want store the second operation
        //afterwards i want to clear the second number to use it for new variable
        if(operator ===undefined || firstNum ===undefined || secondNum===undefined ){
            
            
            return;
        }


        dispValue = operate(firstNum,operator,secondNum)
        operator = button.id;
        firstNum = dispValue
        secondNum = ""
        display(dispValue)
        
        return;
    }
    if(button.id === '='){
        //when the user chooses to operate i want to display the result
        //after displaying the result i want to store it in the firstNum and continue operating as usual
        if(operator ===undefined || firstNum ===undefined || secondNum===undefined ){
            return;
        }

        dispValue = operate(firstNum,operator,secondNum)
        display(dispValue)
        operator = undefined;
        operationAssigned =false
        firstNum = dispValue
        secondNum = ""
        return;
    }
    if(button.id === '+' || button.id === '-' || button.id === 'x' || button.id === '/' ){
        operator = button.id
        operationAssigned = true
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



//i could have done a query selector for class operator but i forgot, might have to rewrite it to make it work


//to delete later fo debugging puproses
// a = prompt('enter first number')
// b = prompt('enter second number')
// a = parseFloat(a)
// b = parseFloat(b)
// console.log(add(a,b))
// console.log(multiply(a,b))
// console.log(subtract(a,b))
// console.log(divide(a,b))