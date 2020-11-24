let number, userAnswer, answerKey;
let click = 0;                
let countMistake = 0;
let countCorrect = 0;
let countNone = 0;
let state = "start";
let buttonBack = document.getElementById("buttonBack");
let buttonRetake = document.getElementById("buttonRetake");
let buttonContinue = document.getElementById("buttonContinue");
let question = document.getElementById("question");
let h2 = document.querySelector("h2");
let passContainer = document.getElementById("pass-container");
let allInputs = document.querySelectorAll("input");
let input1 = document.getElementById("answer1");
let input2 = document.getElementById("answer2");
let input3 = document.getElementById("answer3");
let input4 = document.getElementById("answer4");
let input5 = document.getElementById("answer5");
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
    buttonBack.addEventListener("click", function() {
        passContainer.style.display = "none";
    })
})

// To make the cursor looks good
function checkCursor(input){
    if(input.disabled = true){
        input.className = "notCursor";
    } else {
        input.className = "txtCursor";
    }
}

// To retake the test
buttonRetake.addEventListener("click", function(){
    location.reload();
});

// Function if the answer is correct
function correctAnswer(text, input, p, userAnswer){    
    text = document.createTextNode(userAnswer + " is correct");
    input.style.border = "1px solid green";
    p.style.color = "green";
    p.appendChild(text);
    input.disabled = true;
    checkCursor(input);
    countCorrect++;
}        


// Function if the answer is empty
function emptyAnswer(answerUser, input){
    if(answerUser == ""){
        input.disabled = false;
        alert("It must be filled out");
    } 
}

// Function if the answer is wrong
function wrongAnswer(text, input, p, userAnswer){
    text = document.createTextNode(userAnswer + " is wrong");
    input.style.border = "1px solid red";    
    p.style.color = "red";
    p.appendChild(text);
    input.disabled = true;
    checkCursor(input);
    countMistake++;    
}

// Function if what is the judgement of your answer
function inputsJudgement(answerUser, keyAnswer, text, input, p){
    if(answerUser == keyAnswer) {
        correctAnswer(text, input, p, answerUser);
    } else {
        wrongAnswer(text, input, p, answerUser);
    }
}

// To run the logic of the test
testLogic();

// All the test logic functions
function testLogic(){

    // number 1 logic flow
    input1.addEventListener("keyup", function(e){
        if(e.keyCode === 13){
            number = "1";
            userAnswer = "answer" + number;
            userAnswer = input1.value;
            answerKey = 4;            
            if(input1.value == ""){
                alert("13212");
                state = "not";
            } else {
                inputsJudgement(userAnswer, answerKey, text1, input1, p1);
                state = "start";
            }
            document.getElementById("answerDiv1").appendChild(p1);            
            if(state === "start"){                
                input2.disabled = false;
                input2.className = "txtCursor";
                state = "not";
            }            
        }
    })
    
    // number 2 logic flow
    input2.disabled = true;
    input2.className = "notCursor";
    input2.addEventListener("keyup", function(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            number = 2;
            userAnswer = "answer" + number;
            userAnswer = input2.value;        
            answerKey = 30;        
            if(input2.value == ""){
                alert("12312");
                state = "start";
            } else {
                inputsJudgement(userAnswer, answerKey, text2, input2, p2);        
                state = "not";
            }
            if(state === "not"){
                input3.disabled = false;
                input3.className = "txtCursor";
                state = "start";
            }
            document.getElementById("answerDiv2").appendChild(p2);
        }
    })
    
    // number 3 logic flow
    input3.disabled = true;
    input3.className = "notCursor";
    input3.addEventListener("keyup", function(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            number = 3;
            userAnswer = "answer" + number;
            userAnswer = input3.value;
            answerKey = 11;
            if(input3.value == ""){
                alert("12312");
                state = "not";
            } else {
                inputsJudgement(userAnswer, answerKey, text3, input3, p3);        
                state = "start";
            }
            if(state === "start"){
                input4.disabled = false;
                input4.className = "txtCursor";
                state = "not";
            }
            document.getElementById("answerDiv3").appendChild(p3);
        }
    })
    
    // number 4 logic flow
    input4.disabled = true;
    input4.className = "notCursor";
    input4.addEventListener("keyup", function(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            number = 4;
            userAnswer = "answer" + number;
            userAnswer = input4.value;        
            answerKey = 4;
            if(input4.value == ""){
                alert("12312");
                state = "start";
            } else {
                inputsJudgement(userAnswer, answerKey, text4, input4, p4);
                state = "not";
            }
            if(state === "not"){
                input5.disabled = false;
                input5.className = "txtCursor";
                state = "start";
            }
            document.getElementById("answerDiv4").appendChild(p4);
        }
    })
    
    // number 5 logic flow
    input5.disabled = true;
    input5.className = "notCursor";
    input5.addEventListener("keyup", function(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            number = 5;
            userAnswer = "answer" + number;
            userAnswer = input5.value;
            answerKey = 1;
            if(input5.value == ""){
                alert("12312");
                state = "start";
            } else {
                inputsJudgement(userAnswer, answerKey, text5, input5, p5);
                state = "not";
            }
            if(state === "not"){
                input5.disabled = true;    
                input5.className = "notCursor";
                state = "start";
                // After the test
                document.getElementById("answerDiv5").appendChild(p5);
                const correct = "Number of correct: " + countCorrect;
                const mistake = "Number of mistake: " + countMistake;
                const noAnswer = "Number of blank answer: " + countNone;
                const noneCount = document.createElement("h1");
                const correctCount = document.createElement("h1");
                const mistakeCount = document.createElement("h1")
                const textBlank = document.createTextNode(noAnswer);                
                const textCorrect = document.createTextNode(correct);
                const textMistake = document.createTextNode(mistake);                
                correctCount.appendChild(textCorrect);
                mistakeCount.appendChild(textMistake);
                noneCount.appendChild(textBlank);
                document.getElementById("correctDiv").appendChild(correctCount);
                document.getElementById("mistakeDiv").appendChild(mistakeCount);            
                passContainer.style.display = "flex";

                // Showing the output if the user pass the test
                if(countCorrect > 2){
                    h2.classList.add("green");
                    h2.innerHTML = "You passed the test!";
                    question.innerText = "Do you want to continue?";   
                } 
                // Showing the output if the user failed the test
                else if (countCorrect < 3){
                    h2.classList.add("red");
                    h2.innerHTML = "You failed the test";
                    question.innerText = "Do you want to retake?";
                }
            }        
        }
    })
}