const btn = document.getElementById("convert-btn");
const output = document.getElementById("output-text");
const outputDiv = document.getElementById("output");
const input = document.getElementById("number");
let number;
btn.addEventListener("click", () => {
    number = input.value;
    output.innerText = "";
    test();
    outputDiv.style.opacity = 1;
});

const test = () => {
    if (number >= 4000) {
        output.innerText += "Please enter a number less than or equal to 3999";
        return;
    } else if (number >= 1000) {
        output.innerText += "M";
        number -= 1000;
    } else if (number >= 900) {
        output.innerText += "CM";
        number -= 900;
    } else if (number >= 500) {
        output.innerText += "D";
        number -= 500;
    } else if (number >= 400) {
        output.innerText += "CD";
        number -= 400;
    } else if (number >= 100) {
        output.innerText += "C";
        number -= 100;
    } else if (number >= 90) {
        output.innerText += "XC";
        number -= 90;
    } else if (number >= 50) {
        output.innerText += "L";
        number -= 50;
    } else if (number >= 40) {
        output.innerText += "XL";
        number -= 40;
    } else if (number >= 10) {
        output.innerText += "X";
        number -= 10;
    } else if (number >= 9) {
        output.innerText += "IX";
        number -= 9;
    } else if (number >= 5) {
        output.innerText += "V";
        number -= 5;
    } else if (number >= 4) {
        output.innerText += "IV";
        number -= 4;
    } else if (number >= 1) {
        output.innerText += "I";
        number -= 1;
    } else if (number === 0) {
        return;
    } else if (number === "") {
        output.innerText += "Please enter a valid number";
        return;
    } else {
        output.innerText += "Please enter a number greater than or equal to 1";
        return;
    }
    test();
};