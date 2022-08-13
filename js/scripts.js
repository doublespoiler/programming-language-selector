// Business logic
  //branching for suggestion goes here
function calculate () {

}
// UI logic

function handleSubmission(event){
  event.preventDefault();

  let errorText = document.getElementById("error-text");

  const q1Value = document.getElementById("question1-input").value;
  const q1 = document.getElementById("question1-input");
  const q2Value = document.getElementById("question2-input").value;
  const q3Value = document.getElementById("question3-input").value;
  const q4Value = document.getElementById("question4-input").value;
  const q5Value = document.getElementById("question5-input").value;

  const q1Number = parseInt(q1Value);
  const q2Number = parseInt(q2Value);
  const q3Number = parseInt(q3Value);
  const q4Number = parseInt(q4Value);
  const q5Number = parseInt(q5Value);

  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");

  //do the thing
  nextButton.className = "hidden";
  submitButton.className = "hidden";
  errorText.className = "hidden";
  suggestLanguage(q1Number, q3Number, q5Number);
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
  const questionDiv = document.getElementById("activeQuestion");
  const nextButton = document.getElementById("next-button");
  const resetButton = document.getElementById("reset-button");
  let selectedDiv = document.querySelector("div.current-active"); 
  let expectedNextDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
  let nextDiv;
  errorText.className = "hidden";
  nextButton.innerText = "Next";
  resetButton.className = "";
  if (selectedDiv.id === "question0"){
    nextDiv = document.getElementById("question1");
    const replaceHTML = nextDiv.innerHTML;
    questionDiv.innerHTML = replaceHTML;
    selectedDiv.className = "hidden";
    document.getElementById("question2").className = "current-active";
  } else if (expectedNextDiv < 6){
    if (selectedDiv.id === "question5") {
      const submitButton = document.getElementById("submit-button");
      submitButton.className = "";
      nextButton.className = "hidden";
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

function suggestLanguage(q1Number, q3Number, q5Number) {
  const questionDiv = document.getElementById("activeQuestion");

  if (q1Number === 0){ //no experience
    if(q3Number === 1){ // no system any
      console.log("py");
    } else { //no NOTsystem any
      console.log("htmlcssjs");
    }
  } else if (q1Number === 1) { //little experience
    if (q3Number === 0) { //little user any
      console.log("ruby");
    } else if (q3Number === 2) { //little games any
      console.log("c#");
    } else { 
      if (q5Number = 3)  { //little system games
        console.log("c#");
      } else { //little system social/tinker
        console.log("rust");
      }
    }
  } else { //pro
    if (q3Number === 0) { 
      if (q5Number === 2){ //pro user tinker
        console.log("rust");
      } else { //pro user game/social
        console.log("ruby");
      }
    } else if (q3Number === 1){ //pro system
      if (q5Number === 0) { //pro system games
        console.log("c#");
      } else { //pro system tinker/social
        console.log("rust");
      }
    } else { //pro game
      console.log("c#");
    }
  }
}

function resetForm(){
  const initialQuestion = document.getElementById("question0");
  const questionDiv = document.getElementById("activeQuestion");
  const selectedDiv = document.querySelector("div.current-active");
  const errorText = document.getElementById("error-text");
  const submitButton = document.getElementById("submit-button");
  const nextButton = document.getElementById("next-button");
  errorText.className = "hidden";
  submitButton.className = "hidden";
  nextButton.className = "";

  selectedDiv.className = "hidden";
  initialQuestion.className = "current-active";
  questionDiv.innerHTML =  initialQuestion.innerHTML;
  nextButton.innerText = "Start";
}

