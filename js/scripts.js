// Business logic
  //branching for suggestion goes here

// UI logic

function handleSubmission(event){
  event.preventDefault();

  let errorText = document.getElementById("error-text");
  errorText.className = "hidden";
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

  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");

  //do the thing
  nextButton.className = "hidden";
  submitButton.className = "hidden";

  suggestLanguage();
  // const result = calculate(q1Number, q2Number, q3Number, q4Number, q5Number);
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
  
  const rootDiv = document.getElementById("question0");
  const questionDiv = document.getElementById("activeQuestion");
  const replaceHTML = rootDiv.innerHTML;
  rootDiv.className = "current-active"
  questionDiv.innerHTML = replaceHTML;


  const submit = document.getElementById("suggest-form");
  const reset = document.getElementById("reset-button");
  const nextButton = document.getElementById("next-button");
  submit.addEventListener("submit", handleSubmission);
  nextButton.addEventListener("click", goNext);
  reset.addEventListener("click", resetForm);
});

function goNext() {
  const errorText = document.getElementById("error-text");
  errorText.className = "hidden";
  const questionDiv = document.getElementById("activeQuestion");
  let selectedDiv = document.querySelector("div.current-active"); 
  let expectedNextDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
  let nextDiv;
  if (selectedDiv.id === "question0"){
  nextDiv = document.getElementById("question1");
  const replaceHTML = nextDiv.innerHTML;
  questionDiv.innerHTML = replaceHTML;
  selectedDiv.className = "hidden";
  document.getElementById("question2").className = "current-active";
  } else if (expectedNextDiv < 6){
    if (selectedDiv.id === "question5") {
      const submitButton = document.getElementById("submit-button");
      const resetButton = document.getElementById("reset-button");
      submitButton.className = "";
      resetButton.className = "";
    }
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

function suggestLanguage(result) {
  const questionDiv = document.getElementById("activeQuestion");



  const resultDiv = document.getElementById("question6");
  questionDiv.innerHTML = resultDiv.innerHTML;
}

function resetForm(){
  const initialQuestion = document.getElementById("question0");
  const questionDiv = document.getElementById("activeQuestion");
  const selectedDiv = document.querySelector("div.current-active");
  const errorText = document.getElementById("error-text");
  const submitButton = document.getElementById("submit-button");
  const resetButton = document.getElementById("reset-button");
  const nextButton = document.getElementById("next-button");
  errorText.className = "hidden";
  submitButton.className = "hidden";
  resetButton.className = "hidden";
  nextButton.className = "";

  selectedDiv.className = "hidden";
  initialQuestion.className = "current-active";
  questionDiv.innerHTML =  initialQuestion.innerHTML;
}