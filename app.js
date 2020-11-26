let number, state, userAnswer, answerKey;
let click = 0;                
let countMistake = 0;
let countCorrect = 0;
let countNone = 0;
let buttonBack = document.getElementById("buttonBack");
let buttonRetake = document.getElementById("buttonRetake");
let buttonContinue = document.getElementById("buttonContinue");
let question = document.getElementById("question");
let h2 = document.querySelector("h2");
let passContainer = document.getElementById("pass-container");
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
    document.getElementById("loader").style.display = "none";
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

// Function if the answer is empty
function testAnswer(userAnswer, answerKey, text, input, p, number){
    // Function if the user did not answer the test
    if(input.value == ""){
        input.disabled = false;        
        document.getElementById("span" + number).innerHTML = "Please filled out your answer";
        state = "not";        
    }
    // Function if the user did not answer the test
    else {
        inputsJudgement(userAnswer, answerKey, text, input, p, number);
        document.getElementById("span" + number).remove();
        state = "start";
    }
}

// It checks if it's applicable to go on to another test
function stateReview(input){
    if(state === "start"){
        input.disabled = false;
        input.className = "txtCursor";
    }
}

// To run all the function of the test
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
            testAnswer(userAnswer, answerKey, text1, input1, p1, number);            
            document.getElementById("answerDiv1").appendChild(p1);            
            stateReview(input2);
        }
    })
    
    // number 2 logic flow
    input2.disabled = true;
    input2.className = "notCursor";
    input2.addEventListener("keyup", function(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            number = "2";
            userAnswer = "answer" + number;
            userAnswer = input2.value;        
            answerKey = 30;               
            testAnswer(userAnswer, answerKey, text2, input2, p2, number);
            document.getElementById("answerDiv2").appendChild(p2);
            stateReview(input3);
        }
    })
    
    // number 3 logic flow
    input3.disabled = true;
    input3.className = "notCursor";
    input3.addEventListener("keyup", function(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            number = "3";
            userAnswer = "answer" + number;
            userAnswer = input3.value;
            answerKey = 11;            
            testAnswer(userAnswer, answerKey, text3, input3, p3, number);            
            document.getElementById("answerDiv3").appendChild(p3);
            stateReview(input4);
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
            testAnswer(userAnswer, answerKey, text4, input4, p4, number);
            document.getElementById("answerDiv4").appendChild(p4);
            stateReview(input5);
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
            testAnswer(userAnswer, answerKey, text5, input5, p5, number);
            if(state === "start"){
                input5.disabled = true;    
                input5.className = "notCursor";
                document.getElementById("answerDiv5").appendChild(p5);
                // After the test
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
                else {
                    h2.classList.add("red");
                    h2.innerHTML = "You failed the test";
                    question.innerText = "Do you want to retake?";
                }
            }        
        }
    })
}