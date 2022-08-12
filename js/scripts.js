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



window.addEventListener("load", function(event) {
  event.preventDefault();

  const a = document.getElementById("question0");
  const b = document.querySelector("div.current-active");
  const c = document.querySelector("span.test");
  let currentShow = 0;
  let currentQuestion = "question0"; 

  const submit = document.getElementById("suggest-form");
  const reset = document.getElementById("rest-button");
  const nextButton = document.getElementById ("next-button");
  submit.addEventListener("submit", suggestLanguage);
  nextButton.addEventListener("click", showNext);

  // reset.addEventListener("reset", function(){});

  // back.addEventListener("click", goBack());
  // submit.addEventListener("submit", handleSubmission);
  // reset.addEventListener("reset", handleSubmission);
});

function showNext() {
  let selectDiv = document.querySelector("div.current-active");
  let currentDiv = parseInt(selectDiv.getAttribute("id").replace("question", ""));
  document.querySelector("div.current-active").className = "hidden";
  currentDiv += 1;
  document.getElementById("question" + currentDiv).className = "current-active";

}

function suggestLanguage() {
  let difficultyMod = 0 + question1 + question2 + question3 + question4 + question5;

}