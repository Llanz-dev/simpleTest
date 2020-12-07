const load = document.getElementById("loader");
let number, state, userAnswer, answerKey, totalClick, set;
let countClick;
let countMistake = 0;
let countCorrect = 0;
let buttonBack = document.getElementById("buttonBack");
let buttonRetake = document.getElementById("buttonRetake");
let buttonContinue = document.getElementById("buttonContinue");
let question = document.getElementById("question");
let h2 = document.querySelector("h2");
let passContainer = document.getElementById("pass-container");
// 1 to 5
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
// 6 to 10
let input6 = document.getElementById("answer6");
let input7 = document.getElementById("answer7");
let input8 = document.getElementById("answer8");
let input9 = document.getElementById("answer9");
let input10 = document.getElementById("answer10");
let p6 = document.createElement("p");
let text6;
let p7 = document.createElement("p");
let text7;
let p8 = document.createElement("p");
let text8;
let p9 = document.createElement("p");
let text9;
let p10 = document.createElement("p");
let text10;
// 11 to 15
let input11 = document.getElementById("answer11");
let input12 = document.getElementById("answer12");
let input13 = document.getElementById("answer13");
let input14 = document.getElementById("answer14");
let input15 = document.getElementById("answer15");
let p11 = document.createElement("p");
let text11;
let p12 = document.createElement("p");
let text12;
let p13 = document.createElement("p");
let text13;
let p14 = document.createElement("p");
let text14;
let p15 = document.createElement("p");
let text15;

// Loading screen
window.addEventListener("load", () => {
  load.className += " hidden";
  passContainer.style.display = "none";
  buttonBack.addEventListener("click", function () {
    passContainer.style.display = "none";
  });
});

// Stage 1
const submitButton = document.getElementById("submit");

submitButton.style.cursor = "pointer";

// This all gets the input radio
document.querySelectorAll("[radio" + number + "]").forEach((cell) => {
  cell.addEventListener("click", () => {
    document.getElementById("emptyMessage" + number).style.display = "none";
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
  });
});

// It checks the answer wether the user answer the questions or not
function answerCheck(questAnswer, answerKey, number) {
  if (questAnswer == "") {
    countCorrect = 0;
    countMistake = 0;
    countClick = 0;
    // document.getElementById("emptyMessage" + number).textContent =
    //   "Please filled out your answer on number " + number;
    // document.getElementById("emptyMessage" + number).style.color = "yellow";
    // document.querySelectorAll("[radio" + number + "]").forEach((allRadio) => {
    //   allRadio.addEventListener("click", () => {
    //     document.getElementById("emptyMessage" + number).style.display = "none";
    //   });
    // });
  } else if (questAnswer == answerKey) {
    if (countClick === 0) {
      document.getElementById("answerMessage" + number).style.display = "none";
    }
    document.getElementById("answerMessage" + number).textContent =
      answerKey + " is CORRECT";
    document.getElementById("answerMessage" + number).style.color = "green";
    countCorrect++;
  } else {
    if (countClick === 0) {
      document.getElementById("answerMessage" + number).style.display = "none";
    }
    document.getElementById("answerMessage" + number).textContent =
      questAnswer + " is WRONG";
    document.getElementById("answerMessage" + number).style.color = "red";
    countMistake++;
  }
  totalClick = countMistake + countCorrect;

  if (totalClick == 15) {
    Scoring();
  }
}

// Answer database
function questAnswer() {
  let questAnswer1 = document.quiz.question1.value;
  number = 1;
  answerKey = "C";
  answerCheck(questAnswer1, answerKey, number);
  let questAnswer2 = document.quiz.question2.value;
  number = 2;
  answerKey = "A";
  answerCheck(questAnswer2, answerKey, number);
  let questAnswer3 = document.quiz.question3.value;
  number = 3;
  answerKey = "D";
  answerCheck(questAnswer3, answerKey, number);
  let questAnswer4 = document.quiz.question4.value;
  number = 4;
  answerKey = "A";
  answerCheck(questAnswer4, answerKey, number);
  let questAnswer5 = document.quiz.question5.value;
  number = 5;
  answerKey = "D";
  answerCheck(questAnswer5, answerKey, number);
  let questAnswer6 = document.quiz.question6.value;
  number = 6;
  answerKey = "B";
  answerCheck(questAnswer6, answerKey, number);
  let questAnswer7 = document.quiz.question7.value;
  number = 7;
  answerKey = "C";
  answerCheck(questAnswer7, answerKey, number);
  let questAnswer8 = document.quiz.question8.value;
  number = 8;
  answerKey = "A";
  answerCheck(questAnswer8, answerKey, number);
  let questAnswer9 = document.quiz.question9.value;
  number = 9;
  answerKey = "B";
  answerCheck(questAnswer9, answerKey, number);
  let questAnswer10 = document.quiz.question10.value;
  number = 10;
  answerKey = "D";
  answerCheck(questAnswer10, answerKey, number);
  let questAnswer11 = document.quiz.question11.value;
  number = 11;
  answerKey = "C";
  answerCheck(questAnswer11, answerKey, number);
  let questAnswer12 = document.quiz.question12.value;
  number = 12;
  answerKey = "A";
  answerCheck(questAnswer12, answerKey, number);
  let questAnswer13 = document.quiz.question13.value;
  number = 13;
  answerKey = "A";
  answerCheck(questAnswer13, answerKey, number);
  let questAnswer14 = document.quiz.question14.value;
  number = 14;
  answerKey = "B";
  answerCheck(questAnswer14, answerKey, number);
  let questAnswer15 = document.quiz.question15.value;
  number = 15;
  answerKey = "D";
  answerCheck(questAnswer15, answerKey, number);
}

// It checks the score
function Scoring() {
  submitButton.disabled = true;
  submitButton.style.cursor = "not-allowed";
  console.log("Correct " + countCorrect);
  console.log("Wrong " + countMistake);
  if (countCorrect > 9) {
    console.log("You passed");
  } else {
    console.log("You failed");
  }
}

// This will run all the function in stage 1
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  questAnswer();
});

// Stage 2

// To make the cursor looks good
function checkCursor(input) {
  if ((input.disabled = true)) {
    input.className = "notCursor";
  } else {
    input.className = "txtCursor";
  }
}

// To retake the test
buttonRetake.addEventListener("click", function () {
  location.reload();
});

// Function if the answer is correct
function correctAnswer(text, input, p, userAnswer) {
  text = document.createTextNode(userAnswer + " is correct");
  input.style.border = "1px solid green";
  p.style.color = "green";
  p.appendChild(text);
  input.disabled = true;
  checkCursor(input);
  countCorrect++;
}

// Function if the answer is wrong
function wrongAnswer(text, input, p, userAnswer) {
  text = document.createTextNode(userAnswer + " is wrong");
  input.style.border = "1px solid red";
  p.style.color = "red";
  p.appendChild(text);
  input.disabled = true;
  checkCursor(input);
  countMistake++;
}

// Function if what is the judgement of your answer
function inputsJudgement(answerUser, keyAnswer, text, input, p, number) {
  if (answerUser == keyAnswer) {
    correctAnswer(text, input, p, answerUser, number);
  } else {
    wrongAnswer(text, input, p, answerUser, number);
  }
}

// Function if the answer is empty
function testAnswer(userAnswer, answerKey, text, input, p, number) {
  // Function if the user did not answer the test
  if (input.value == "") {
    input.disabled = false;
    document.getElementById("span" + number).innerHTML =
      "Please filled out your answer";
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
function stateReview(input, number) {
  if (state === "start") {
    input.disabled = false;
    document.getElementById("question" + number).style.color =
      "rgb(50, 50, 50)";
    input.className = "txtCursor";
  }
}

// To run all the function of the test
testLogic();

// All the test logic functions
function testLogic() {
  // number 1 logic flow
  input1.disabled = true;
  input1.classList = "notCursor";
  input1.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "1";
      userAnswer = "answer" + number;
      userAnswer = input1.value;
      answerKey = 4;
      testAnswer(userAnswer, answerKey, text1, input1, p1, number);
      document.getElementById("answerDiv1").appendChild(p1);
      stateReview(input2, number);
    }
  });

  // number 2 logic flow
  input2.disabled = true;
  input2.className = "notCursor";
  input2.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "2";
      userAnswer = "answer" + number;
      userAnswer = input2.value;
      answerKey = 30;
      testAnswer(userAnswer, answerKey, text2, input2, p2, number);
      document.getElementById("answerDiv2").appendChild(p2);
      stateReview(input3, number);
    }
  });

  // number 3 logic flow
  input3.disabled = true;
  input3.className = "notCursor";
  input3.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "3";
      userAnswer = "answer" + number;
      userAnswer = input3.value;
      answerKey = 11;
      testAnswer(userAnswer, answerKey, text3, input3, p3, number);
      document.getElementById("answerDiv3").appendChild(p3);
      stateReview(input4, number);
    }
  });

  // number 4 logic flow
  input4.disabled = true;
  input4.className = "notCursor";
  input4.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "4";
      userAnswer = "answer" + number;
      userAnswer = input4.value;
      answerKey = 4;
      testAnswer(userAnswer, answerKey, text4, input4, p4, number);
      document.getElementById("answerDiv4").appendChild(p4);
      stateReview(input5, number);
    }
  });

  // number 5 logic flow
  input5.disabled = true;
  input5.className = "notCursor";
  input5.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "5";
      userAnswer = "answer" + number;
      userAnswer = input5.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text5, input5, p5, number);
      document.getElementById("answerDiv5").appendChild(p5);
      stateReview(input6, number);
    }
  });

  // number 6 logic flow
  input6.disabled = true;
  input6.className = "notCursor";
  input6.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "6";
      userAnswer = "answer" + number;
      userAnswer = input6.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text6, input6, p6, number);
      document.getElementById("answerDiv6").appendChild(p6);
      stateReview(input7, number);
    }
  });

  // number 7 logic flow
  input7.disabled = true;
  input7.className = "notCursor";
  input7.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "7";
      userAnswer = "answer" + number;
      userAnswer = input7.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text7, input7, p7, number);
      document.getElementById("answerDiv7").appendChild(p7);
      stateReview(input8, number);
    }
  });

  // number 8 logic flow
  input8.disabled = true;
  input8.className = "notCursor";
  input8.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "8";
      userAnswer = "answer" + number;
      userAnswer = input8.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text8, input8, p8, number);
      document.getElementById("answerDiv8").appendChild(p8);
      stateReview(input9, number);
    }
  });

  // number 9 logic flow
  input9.disabled = true;
  input9.className = "notCursor";
  input9.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "9";
      userAnswer = "answer" + number;
      userAnswer = input9.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text9, input9, p9, number);
      document.getElementById("answerDiv9").appendChild(p9);
      stateReview(input10, number);
    }
  });

  // number 10 logic flow
  input10.disabled = true;
  input10.className = "notCursor";
  input10.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "10";
      userAnswer = "answer" + number;
      userAnswer = input10.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text10, input10, p10, number);
      document.getElementById("answerDiv10").appendChild(p10);
      stateReview(input11, number);
    }
  });

  // number 11 logic flow
  input11.disabled = true;
  input11.className = "notCursor";
  input11.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "11";
      userAnswer = "answer" + number;
      userAnswer = input11.value;
      answerKey = 4;
      testAnswer(userAnswer, answerKey, text11, input11, p11, number);
      document.getElementById("answerDiv11").appendChild(p11);
      stateReview(input12, number);
    }
  });

  // number 12 logic flow
  input12.disabled = true;
  input12.className = "notCursor";
  input12.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "12";
      userAnswer = "answer" + number;
      userAnswer = input12.value;
      answerKey = 30;
      testAnswer(userAnswer, answerKey, text12, input12, p12, number);
      document.getElementById("answerDiv12").appendChild(p12);
      stateReview(input13, number);
    }
  });

  // number 13 logic flow
  input13.disabled = true;
  input13.className = "notCursor";
  input13.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "13";
      userAnswer = "answer" + number;
      userAnswer = input13.value;
      answerKey = 11;
      testAnswer(userAnswer, answerKey, text13, input13, p13, number);
      document.getElementById("answerDiv13").appendChild(p13);
      stateReview(input14, number);
    }
  });

  // number 14 logic flow
  input14.disabled = true;
  input14.className = "notCursor";
  input14.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "14";
      userAnswer = "answer" + number;
      userAnswer = input14.value;
      answerKey = 4;
      testAnswer(userAnswer, answerKey, text14, input14, p14, number);
      document.getElementById("answerDiv14").appendChild(p14);
      stateReview(input15, number);
    }
  });

  // number 15 logic flow
  input15.disabled = true;
  input15.className = "notCursor";
  input15.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      number = "15";
      userAnswer = "answer" + number;
      userAnswer = input15.value;
      answerKey = 1;
      testAnswer(userAnswer, answerKey, text15, input15, p15, number);
      document.getElementById("answerDiv15").appendChild(p15);
      if (state === "start") {
        input15.disabled = true;
        input15.className = "notCursor";
        document.getElementById("answerDiv15").appendChild(p15);
        // After the test
        const correct = "Number of correct: " + countCorrect;
        const mistake = "Number of mistake: " + countMistake;
        const noAnswer = "Number of blank answer: " + countNone;
        const noneCount = document.createElement("h1");
        const correctCount = document.createElement("h1");
        const mistakeCount = document.createElement("h1");
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
        if (countCorrect > 2) {
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
  });
}
