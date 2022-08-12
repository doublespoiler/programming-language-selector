// Business logic

function getUserInput(event)

  //branching for suggestion goes here

// UI logic

function handleSubmission(event, ){
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

// function setCurrent(currentActive){
//   document.getElementById("question").classList = "currentActive";
//   currentActive = 
// }


function suggestLanguage(question1, question2, question3, question4, question5) {
  let difficultyMod = 0 + question1 + question2 + question3 + question4 + question5;

}

window.addEventListener("load", function() {
  let currentActive = "question0"; 

  const currentForm = document.querySelector("div.currentActive");

  currentActive = submit.addEventListener("click", handleBack);
  submit.addEventListener("submit", handleSubmission);
});