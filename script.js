{
    num1 = 0;
    num2 = 0;
    op1 = (first, second) => Number(first) + Number(second);
}

function getInput() {
    const inputBox = document.getElementById("content");
    const value = inputBox.getAttribute("value");
    return value
}

function setInput(input) {
    const inputBox = document.getElementById("content");
    inputBox.setAttribute("value", input);
}

function resetInput() {
    const inputBox = document.getElementById("content");
    const resultBox = document.getElementById("result");
    inputBox.setAttribute("value", "");
    resultBox.setAttribute("value", "0");
    op1 = (first, second) => Number(first) + Number(second);
    num1 = 0;
    num2 = 0;
}

function clearInput() {
    const inputBox = document.getElementById("content");
    inputBox.setAttribute("value", "");
}

function remove() {
    const resultBox = document.getElementById("result");
    const screen = getInput();
    const newScreen = screen.slice(0,-1);
    setInput(newScreen);
    resultBox.setAttribute("value", newScreen);
    num2 = Number(newScreen);
}

function resizeFont() {
    const inputBox = document.getElementById("content");
    currentNum = getInput();
    switch (true) {
        case currentNum.toString().length >= 13:
            inputBox.style.fontSize = "22px";
            break;
        case currentNum.toString().length >= 11:
            inputBox.style.fontSize = "28px";
            break;
        case currentNum.toString().length >= 9:
            inputBox.style.fontSize = "30px";
            break;
        case currentNum.toString().length < 9:
            inputBox.style.fontSize = "40px";
            break;
    }
}

function divide() {
    resultBox();
    num1 = op1(num1, num2);
    op1 = (first, second) => {
        if ((first/second).toString().length >= 15) {
            return (first/second).toFixed(14);
        }
        return first/second;
    }
    clearInput();
}

function multiply() {
    resultBox();
    num1 = op1(num1, num2);
    op1 = (first, second) => first * second;
    clearInput();
}

function minus() {
    resultBox();
    num1 = op1(num1, num2);
    op1 = (first, second) => first - second;
    clearInput();
}

function add() {
    resultBox();
    num1 = op1(num1, num2);
    op1 = (first, second) => Number(first) + Number(second);
    clearInput();
}

function equals() {
    const newNum = op1(num1, num2)
    setInput(newNum);
    resultBox();
    num1 = 0;
    num2 = newNum
    op1 = (first, second) => Number(first) + Number(second);
}

function resultBox() {
    const resultBox = document.getElementById("result");
    const result = op1(num1, num2);
    resultBox.setAttribute("value", result);
}

function decimal() {
}

function addToVariable(input) {
    const currentNum = getInput();
    if (currentNum.toString().length >= 15) {
        return;
    } 
    setInput(currentNum * 10 + input);
    num2 = getInput();
    resizeFont();
}