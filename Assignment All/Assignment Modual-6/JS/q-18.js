 // multiply two numbers and display the result
 function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 * num2;
}



// divide two numbers and display the result
function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 / num2;
}



// add two numbers and display the result  
function additionby() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}


// subtracte two numbers and display the result 
function subtractionby() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 - num2;
}


// modulus two numbers and display the result 
function modulusby() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 % num2;
}