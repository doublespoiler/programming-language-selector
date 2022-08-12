// Business logic
  //branching for suggestion goes here

// UI logic

function handleSubmission(event){
  event.preventDefault();
  //do the thing
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
  const backButton = document.getElementById("back-button");
  submit.addEventListener("submit", suggestLanguage);
  nextButton.addEventListener("click", goNext);
  backButton.addEventListener("click", goBack);
  reset.addEventListener("reset", resetForm);

  // back.addEventListener("click", goBack());
  // submit.addEventListener("submit", handleSubmission);
  // reset.addEventListener("reset", handleSubmission);
});

function goNext() {
  let questionDiv = document.getElementById("activeQuestion");
  let selectedDiv = document.querySelector("div.current-active"); 
  let currentDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
  let errorText = document.querySelector("span.error-text");
  if (currentDiv >= 5) {
    errorText.className = "";
    errorText.innerText = "This is the last page, please go back, reset, or submit!";
    return;
  } else {
  let replaceHTML = selectedDiv.innerHTML;
  questionDiv.innerHTML = replaceHTML;
  selectedDiv.className = "hidden"
  currentDiv +=  1;
  document.getElementById("question" + currentDiv).className = "current-active";
  errorText.className = "hidden";
  }
}

function goBack() {
  let questionDiv = document.getElementById("activeQuestion");
  let selectedDiv = document.querySelector("div.current-active"); 
  let currentDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
  let errorText = document.getElementById("error-text");
  if (currentDiv <= 0) {
    errorText.className = "";
    errorText.innerText = "This is the first page, you cannot go back."
    return;
  } else {
  let replaceHTML = selectedDiv.innerHTML;
  questionDiv.innerHTML = replaceHTML;
  selectedDiv.className = "hidden"
  currentDiv -=  1;
  document.getElementById("question" + currentDiv).className = "current-active";
  errorText.className = "hidden";
  }
}



function suggestLanguage() {
  let difficultyMod = 0 + question1 + question2 + question3 + question4 + question5;
}

function resetForm(){
  document.getElementById("question").innerText = document.getElementById("question0").innerText;
}