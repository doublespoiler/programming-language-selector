// Business logic
  //branching for suggestion goes here

// UI logic

function handleSubmission(event){
  event.preventDefault();
  const q1Value = document.getElementById("question1-input").value;
  const q2Value = document.getElementById("question2-input").value;
  const q3Value = document.getElementById("question3-input").value;
  const q4Value = document.getElementById("question4-input").value;
  const q5Value = document.getElementById("question5-input").value;

  const q1Number= parseInt(q1Value);
  const q2Number= parseInt(q2Value);
  const q3Number= parseInt(q3Value);
  const q4Number= parseInt(q4Value);
  const q5Number= parseInt(q5Value);
  //do the thing
  suggestLanguage(q1Number, q2Number, q3Number, q4Number, q5Number);
}

// function handleReset(event){
//   event.preventDefault();

// }

// function handleNext(event){
//   event.preventDefault();
//   if (document.)

// }

// function handleBack(event, currentActive){
//   event.preventDefault();
//   currentActive -= 1;
//   return currentActive;
// }



window.addEventListener("DOMContentLoaded", function(event) {
  event.preventDefault();
  let currentShow = 0;
  let currentQuestion = "question0"; 

  const submit = document.getElementById("suggest-form");
  const reset = document.getElementById("reset-button");
  const nextButton = document.getElementById("next-button");
  submit.addEventListener("submit", handleSubmission);
  nextButton.addEventListener("click", goNext);
  reset.addEventListener("reset", resetForm);
});

function goNext() {
  let errorText = document.getElementById("error-text");
  errorText.className = "hidden";
  let questionDiv = document.getElementById("activeQuestion");
  let selectedDiv = document.querySelector("div.current-active"); 
  let expectedNextDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
  let nextDiv;
  if (expectedNextDiv === 6){
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    submitButton.className = "";
  }
  if (expectedNextDiv < 6){
    nextDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
    let replaceHTML = selectedDiv.innerHTML;
    questionDiv.innerHTML = replaceHTML;
    selectedDiv.className = "hidden"
    nextDiv += 1;
    document.getElementById("question" + nextDiv).className = "current-active";
  } else {
    errorText.innerText = "This is the last page! Please submit, reset, or go back!"
    errorText.className = "";
  }
}

function suggestLanguage(q1Number, q2Number, q3Number, q4Number, q5Number) {
  const questionDiv = document.getElementById("activeQuestion");
  const resultDiv = document.getElementById("question6");
  const selectedDiv = document.querySelector("div.current-active");
  selectedDiv.className = "hidden"; 
  
  let difficultyMod = q1Number + q2Number + q3Number + q4Number + q5Number;

  questionDiv.innerHTML = resultDiv.innerHTML;

}

function resetForm(){
  const initialQuestion = document.getElementById("question0");
  const questionDiv = document.getElementById("question");
  const selectedDiv = document.querySelector("div.current-active");

  selectedDiv.className = "hidden";
  initialQuestion.className = "current-active";
  questionDiv.innerHTML =  initialQuestion.innerHTML;
}