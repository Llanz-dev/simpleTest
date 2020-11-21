let countMistake = 0;
let countCorrect = 0;
let state = "start";
let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let question = document.getElementById("question");
let h2 = document.querySelector("h2");
let passContainer = document.getElementById("pass-container");
let allInputs = document.querySelectorAll("input");
let p1 = document.createElement("p");
let text1;
let p2 = document.createElement("p");
let text2;
let p3 = document.createElement("p");
let text3;
let p4 = document.createElement("p");
let text4;
let p5 = document.createElement("p");
let text5;
window.addEventListener("load", () => {
    passContainer.style.display = "none";    
    buttonOne.addEventListener("click", function() {
        passContainer.style.display = "none";
    })
})

function checkCursor(input){
    if(input.disabled = true){
        input.className = "notCursor";
    } else {
        input.className = "txtCursor";
    }
}
// number 1
let input1 = document.getElementById("answer1");
input1.addEventListener("keyup", function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        const answer1 = input1.value;
        if(answer1 == 4){
            text1 = document.createTextNode(answer1 + " is correct");
            input1.style.border = "1px solid green";
            p1.style.color = "green";
            countCorrect++;
        } else {
            text1 = document.createTextNode(answer1 + " is wrong");
            input1.style.border = "1px solid red";
            p1.style.color = "red";
            countMistake++;            
        }
        p1.appendChild(text1);
        input1.disabled = true;
        checkCursor(input1);
        if(state == "start"){
            input2.disabled = false;
            input2.className = "txtCursor";
            state = "not";
        }
        document.getElementById("answerDiv1").appendChild(p1);
    }
})

// number 2
let input2 = document.getElementById("answer2");
input2.disabled = true;
input2.className = "notCursor";
input2.addEventListener("keyup", function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        const answer2 = input2.value;        
        if(answer2 == 30){
            text2 = document.createTextNode(answer2 + " is correct");
            input2.style.border = "1px solid green";
            p2.style.color = "green";
            countCorrect++;
        } else {
            text2 = document.createTextNode(answer2 + " is wrong");
            input2.style.border = "1px solid red";
            p2.style.color = "red";
            countMistake++;
        }
        p2.appendChild(text2);
        input2.disabled = true;
        checkCursor(input2);
        if(state === "not"){
            input3.disabled = false;
            input3.className = "txtCursor";
            state = "start";
        }
        document.getElementById("answerDiv2").appendChild(p2);
    }
})

// number 3
let input3 = document.getElementById("answer3");
input3.disabled = true;
input3.className = "notCursor";
input3.addEventListener("keyup", function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        const answer3 = input3.value;
        if(answer3 == 11){
            text3 = document.createTextNode(answer3 + " is correct");
            input3.style.border = "1px solid green";
            p3.style.color = "green";
            countCorrect++;
        } else {
            text3 = document.createTextNode(answer3 + " is wrong");
            input3.style.border = "1px solid red";
            p3.style.color = "red";
            countMistake++;
        }
        p3.appendChild(text3);
        input3.disabled = true;
        checkCursor(input3);
        if(state === "start"){
            input4.disabled = false;
            input4.className = "txtCursor";
            state = "not";
        }
        document.getElementById("answerDiv3").appendChild(p3);
    }
})

// number 4
let input4 = document.getElementById("answer4");
input4.disabled = true;
input4.className = "notCursor";
input4.addEventListener("keyup", function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        const answer4 = input4.value;        
        if(answer4 == 4){
            text4 = document.createTextNode(answer4 + " is correct");
            input4.style.border = "1px solid green";
            p4.style.color = "green";
            countCorrect++;
        } else {
            text4 = document.createTextNode(answer4 + " is wrong");
            input4.style.border = "1px solid red";
            p4.style.color = "red";
            countMistake++;
        }
        p4.appendChild(text4);
        input4.disabled = true;
        checkCursor(input4);
        if(state === "not"){
            input5.disabled = false;
            input5.className = "txtCursor";
            state = "start";
        }
        document.getElementById("answerDiv4").appendChild(p4);
    }
})

// number 5
let input5 = document.getElementById("answer5");
input5.disabled = true;
input5.className = "notCursor";
input5.addEventListener("keyup", function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        let answer5 = input5.value;
        if(answer5 == 1){
            text5 = document.createTextNode(answer5 + " is correct");
            input5.style.border = "1px solid green";
            p5.style.color = "green";
            countCorrect++;
        } else {
            text5 = document.createTextNode(answer5 + " is wrong");
            input5.style.border = "1px solid red";
            p5.style.color = "red";
            countMistake++;
        }
        p5.appendChild(text5);
        input5.disabled = true;
        checkCursor(input5);
        if(state === "not"){
            input5.disabled = false;    
            input5.className = "txtCursor";
            state = "start";
        }
        document.getElementById("answerDiv5").appendChild(p5);
            const correct = "Number of correct: " + countCorrect;
            const mistake = "Number of mistake: " + countMistake;
            const correctCount = document.createElement("h1");
            const mistakeCount = document.createElement("h1");
            const textCorrect = document.createTextNode(correct);
            const textMistake = document.createTextNode(mistake);
            correctCount.appendChild(textCorrect);
            mistakeCount.appendChild(textMistake);
            document.getElementById("correctDiv").appendChild(correctCount);
            document.getElementById("mistakeDiv").appendChild(mistakeCount);            
            passContainer.style.display = "flex";
            if(countCorrect > 2 ){
                buttonOne.innerText = "Back";
                buttonTwo.innerText = "Continue";
                h2.innerHTML = "You passed the test!";  
                question.innerText = "Do you want to continue?";
            } else {
                countCorrect = 0;
                countMistake = 0;
                buttonOne.innerText = "Back";
                buttonTwo.innerText = "Restart";
                h2.style.color = "red";
                h2.innerHTML = "You failed the test";
                question.innerText = "Do you want to restart?";
                buttonTwo.addEventListener("click", () => {                   
                    if(countCorrect < 2){
                        h2.style.color = "rgb(0, 255, 0)";
                        question.innerText = "Do you want to continue?";
                    }
                    passContainer.style.display = "none";                    
                    other();
                    answer1.value = "";
                    p1.removeChild(text1);                    
                    document.getElementById("answerDiv1").removeChild(p1);                    
                    input1.disabled = false;
                    input1.className = "txtCursor";
                    input1.style.border = "1px solid black";                    
                    correctCount.remove();
                    mistakeCount.remove();                    
                })
            }
    }
})
function other(){
    answer2.value = "";
    answer2.style.border = "1px solid black";
    p2.removeChild(text2);
    document.getElementById("answerDiv2").removeChild(p2);

    answer3.value = "";
    answer3.style.border = "1px solid black";
    p3.removeChild(text3);
    document.getElementById("answerDiv3").removeChild(p3);

    answer4.value = "";
    answer4.style.border = "1px solid black";
    p4.removeChild(text4);
    document.getElementById("answerDiv4").removeChild(p4);

    answer5.value = "";
    answer5.style.border = "1px solid black";
    p5.removeChild(text5);
}