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
  let currentShow = 0;
  let currentQuestion = "question0"; 

  const submit = document.getElementById("suggest-form");
  const reset = document.getElementById("reset-button");
  const nextButton = document.getElementById ("next-button");
  submit.addEventListener("submit", suggestLanguage);
  nextButton.addEventListener("click", showNext);
  reset.addEventListener("reset", resetForm);

  // back.addEventListener("click", goBack());
  // submit.addEventListener("submit", handleSubmission);
  // reset.addEventListener("reset", handleSubmission);
});

function showNext() {
  let currentDiv = document.querySelector(".select"); 
  let selectedDiv = currentDiv.getAttribute("id");
  document.getElementById("question").innerText = currentDiv.innerText();
  currentDiv.classList.remove("selected");
  selectedDiv +=  1;
  document.getElementById("question" + selectedDiv).classList.add("selected");

}

function suggestLanguage() {
  let difficultyMod = 0 + question1 + question2 + question3 + question4 + question5;
}

function resetForm(){
  document.getElementById("question").innerText = document.getElementById("question0").innerText;
}