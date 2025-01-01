const screen = document.querySelector(".screen");
const clr = document.querySelector("#clear");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const div = document.querySelector("#divide");
const mul = document.querySelector("#multiply");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");

screen.textContent = "";
first = 0;
second = 0;
operator = "";

function addition() {
    return first + second;
};

function subtract() {
    return first - second;
};

function multiply() {
    return first * second;
};

function divide() {
    return first / second;
};

function operate(a) {
    if (a === "+") {
        screen.textContent = "=" + addition();
    };
    if (a === "-") {
        screen.textContent = "=" + subtract();
    };
    if (a === "*") {
        screen.textContent = "=" + multiply();
    };
    if (a === "/") {
        screen.textContent = "=" + divide();
    };
};

function clear() {
    screen.textContent = "";
    first = 0;
    second = 0;
    operator = "";
};

function numCheck() {
    // if (screen.textContent.substr(-1) === "+" || screen.textContent.substr(-1) === "-" || screen.textContent.substr(-1) === "*" || screen.textContent.substr(-1) === "/") {
    //     first = Number(screen.textContent.substr(0,screen.textContent.length - 2));
    // }
    if (screen.textContent.substr(0,1) === "=") {
        screen.textContent = "";
    };
};

function operateCheck() {
    let index = 0;
    if (screen.textContent.includes("+")) {
        index = screen.textContent.indexOf("+");
    };
    if (screen.textContent.includes("-")) {
        index = screen.textContent.indexOf("-");
    };
    if (screen.textContent.includes("*")) {
        index = screen.textContent.indexOf("*");
    };
    if (screen.textContent.includes("/")) {
        index = screen.textContent.indexOf("/");
    };
    second = Number(screen.textContent.substr(index + 1));
};

clr.addEventListener("click", clear);
add.addEventListener("click", () => {
    operator = "+";
    first = Number(screen.textContent);
    screen.textContent += "+";
    dot.disabled = false;
});
sub.addEventListener("click", () => {
    operator = "-";
    first = Number(screen.textContent);
    screen.textContent += "-";
    dot.disabled = false;
});
mul.addEventListener("click", () => {
    operator = "*";
    first = Number(screen.textContent);
    screen.textContent += "*";
    dot.disabled = false;
});
div.addEventListener("click", () => {
    operator = "/";
    first = Number(screen.textContent);
    screen.textContent += "/";
    dot.disabled = false;
});
equal.addEventListener("click", () => {
    operateCheck();
    operate(operator);
    first = 0;
    second = 0;
    operator = "";
    dot.disabled = false;
});
one.addEventListener("click", () => {
    numCheck();
    screen.textContent += "1";
});
two.addEventListener("click", () => {
    numCheck();
    screen.textContent += "2";
});
three.addEventListener("click", () => {
    numCheck();
    screen.textContent += "3";
});
four.addEventListener("click", () => {
    numCheck();
    screen.textContent += "4";
});
five.addEventListener("click", () => {
    numCheck();
    screen.textContent += "5";
});
six.addEventListener("click", () => {
    numCheck();
    screen.textContent += "6";
});
seven.addEventListener("click", () => {
    numCheck();
    screen.textContent += "7";
});
eight.addEventListener("click", () => {
    numCheck();
    screen.textContent += "8";
});
nine.addEventListener("click", () => {
    numCheck();
    screen.textContent += "9";
});
zero.addEventListener("click", () => {
    numCheck();
    screen.textContent += "0";
});
dot.addEventListener("click", () => {
    numCheck();
    screen.textContent += ".";
    dot.disabled = true;
});