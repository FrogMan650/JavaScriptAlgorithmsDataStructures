const textInput = document.getElementById("text-input");
const spanText = document.getElementById("input-text");
const spanText2 = document.getElementById("input-text2");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
checkButton.addEventListener("click", changeText);
let palindromeCheck = false;

function changeText() {
    if(textInput.value === "") {
        alert("Please input a value");
        return;
    }
    const regex = /[^a-zA-Z0-9]/g;
    let inputText = textInput.value.replace(regex, '');
    let spreadText = [...inputText.toLowerCase()];
    if(spreadText.length === 1) {
        palindromeCheck = true;
    } else if(spreadText.length === 0) {
        palindromeCheck = false;
    } else {
        for(let i = 0; i < Math.floor(spreadText.length/2); i++) {
            if(spreadText[i] === spreadText[spreadText.length - (1+i)]) {
                palindromeCheck = true;
            } else {
                palindromeCheck = false;
                break;
            }
        }
    }
    
    spanText2.innerText = palindromeCheck ? "is a palindrome" : "is not a palindrome";
    spanText.innerText = textInput.value;
    resultDiv.style.opacity = 1;
}
