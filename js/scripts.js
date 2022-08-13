// Business logic
  //branching for suggestion goes here
function calculate () {

}
// UI logic

function handleSubmission(event){
  event.preventDefault();

  let errorText = document.getElementById("error-text");

  const q1Value = document.getElementById("question1-input").value;
  const q2Value = document.getElementById("question2-input").value;
  const q3Value = document.getElementById("question3-input").value;
  const q4Value = document.getElementById("question4-input").value;
  const q5Value = document.getElementById("question5-input").value;

  const q1Number = parseInt(q1Value);
  const q2Number = parseInt(q2Value);
  const q3Number = parseInt(q3Value);
  const q4Number = parseInt(q4Value);
  const q5Number = parseInt(q5Value);

  const question5Div = document.getElementById("question5");
  const resultDiv = document.getElementById("question6");

  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");

  //do the thing
  nextButton.className = "hidden";
  submitButton.className = "hidden";
  errorText.className = "hidden";
  question5Div.className = "hidden";
  resultDiv.className = "current-active"
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
  rootDiv.className = "current-active"

  const submit = document.getElementById("suggest-form");
  const reset = document.getElementById("reset-button");
  const nextButton = document.getElementById("next-button");
  submit.addEventListener("submit", handleSubmission);
  nextButton.addEventListener("click", goNext);
  reset.addEventListener("click", resetForm);
});

function goNext() {
  const errorText = document.getElementById("error-text");
  const nextButton = document.getElementById("next-button");
  const resetButton = document.getElementById("reset-button");
  let selectedDiv = document.querySelector("div.current-active"); 
  let expectedNextDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
  let nextDiv;
  errorText.className = "hidden";
  nextButton.innerText = "Next";
  resetButton.className = "";
  if (selectedDiv.id === "question0"){
    selectedDiv.className = "hidden";
    document.getElementById("question1").className = "current-active";
  // } else if (expectedNextDiv === 5){
  //   if (selectedDiv.id === "question5") {
  //     const submitButton = document.getElementById("submit-button");
  //     document.getElementById("question5").className = "current-active floating";
  //     submitButton.className = "";
  //     nextButton.className = "hidden";
  //   }
  } else if (selectedDiv.id === "question4") {
    selectedDiv.className = "hidden"
    const submitButton = document.getElementById("submit-button");
    document.getElementById("question5").className = "current-active";
    submitButton.className = "";
    nextButton.className = "hidden";
  } else {
    nextDiv = parseInt(selectedDiv.getAttribute("id").replace("question", ""));
    selectedDiv.className = "hidden"
    nextDiv += 1;
    document.getElementById("question" + nextDiv).className = "current-active";
    }
  // } else {
  //   errorText.innerText = "This is the last page! Please submit, reset, or go back!"
  //   errorText.className = "";
  // }
}

function suggestLanguage(q1Number, q3Number, q5Number) {
  const resultDiv = document.getElementById("question6");
  const resultImage = document.getElementById("result-image");
  const resultName = document.getElementById("result-name");
  const resultText = document.getElementById("result-text");


  if (q1Number === 0){ //no experience
    if(q3Number === 1){ // no system any
      console.log("py");
      resultImage.src = "python.png";
      resultName.innerText = "PYTHON";
      resultText.innerText = "asdfasdf";
      
    } else { //no NOTsystem any
      console.log("htmlcssjs");
      resultImage.src = "html.png";
      resultName.innerText = "HTML / CSS / Javascript";
      resultText.innerText = "asdfasdf";
    }
  } else if (q1Number === 1) { //little experience
    if (q3Number === 0) { //little user any
      console.log("ruby");
      resultImage.src = "ruby.png";
      resultName.innerText = "Ruby";
      resultText.innerText = "asdfasdf";
    } else if (q3Number === 2) { //little games any
      console.log("c#");
      resultImage.src = "csharp.png";
      resultName.innerText = "C#";
      resultText.innerText = "asdfasdf";
    } else { 
      if (q5Number = 3)  { //little system games
        console.log("c#");
        resultImage.src = "csharp.png";
        resultName.innerText = "C#";
        resultText.innerText = "asdfasdf";
      } else { //little system social/tinker
        console.log("rust");
      }
    }
  } else { //pro
    if (q3Number === 0) { 
      if (q5Number === 2){ //pro user tinker
        console.log("rust");        
        resultImage.src = "rust.png";
        resultName.innerText = "RUST";
        resultText.innerText = "asdfasdf";
      } else { //pro user game/social
        console.log("ruby");
        resultImage.src = "ruby.png";
        resultName.innerText = "Ruby";
        resultText.innerText = "asdfasdf";
      }
    } else if (q3Number === 1){ //pro system
      if (q5Number === 0) { //pro system games
        console.log("c#");
        resultImage.src = "csharp.png";
        resultName.innerText = "C#";
        resultText.innerText = "asdfasdf";
      } else { //pro system tinker/social
        console.log("rust");
        resultImage.src = "rust.png";
        resultName.innerText = "RUST";
        resultText.innerText = "asdfasdf";
      }
    } else { //pro game
      console.log("c#");
      resultImage.src = "csharp.png";
      resultName.innerText = "C#";
      resultText.innerText = "asdfasdf";
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
  nextButton.innerText = "Start";
}

