// Business logic

function suggestLanguage(q1Number, q3Number, q5Number) {
  const resultDiv = document.getElementById("question6");
  const resultImage = document.getElementById("result-image");
  const resultName = document.getElementById("result-name");
  const resultText = document.getElementById("result-text");
  if (q1Number === 0){
    if(q3Number === 1){ 
      displayPython(resultImage, resultName, resultText);
    } else {
      displayHtml(resultImage, resultName, resultText);
    }
  } else if (q1Number === 1) {
    if (q3Number === 0) {
      displayRuby(resultImage, resultName, resultText);
    } else if (q3Number === 2) {
      displayCsharp(resultImage, resultName, resultText);
    } else { 
      if (q5Number = 3)  {
        displayCsharp(resultImage, resultName, resultText);
      } else {
        displayRust(resultImage, resultName, resultText);
      }
    }
  } else {
    if (q3Number === 0) {
      if (q5Number === 2){
        displayRust(resultImage, resultName, resultText);
      } else {
        displayRuby(resultImage, resultName, resultText);
      }
    } else if (q3Number === 1){
      if (q5Number === 0) {
        displayCsharp(resultImage, resultName, resultText);
      } else {
        displayRust(resultImage, resultName, resultText);
      }
    } else { 
      displayCsharp(resultImage, resultName, resultText);
    } 
  }
  resultDiv.className = "current-active";
}


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

// UI logic

function displayHtml(resultImage, resultName, resultText){
  resultImage.src = "images/html.png";
  resultImage.alt = "the html, css and javascript logos";
  resultName.innerText = "HTML / CSS / Javascript";
  resultText.innerText = "HTML, CSS and Javascript are the building blocks of the web. HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.";
}

function displayCsharp(resultImage, resultName, resultText){
  resultImage.src = "images/csharp.png";
  resultImage.alt = "the c# logo";
  resultName.innerText = "C#";
  resultText.innerText = "C# is a simple, modern, and an object-oriented programming language. The purpose of C# was to develop a programming language that is not only easy to learn but also supports modern day functionality for all kind of software development. It is commonly used in all sorts of development, including games and web development.";
}

function displayRuby(resultImage, resultName, resultText){
  resultImage.src = "images/ruby.png";
  resultImage.alt = "the ruby logo";
  resultName.innerText = "Ruby";
  resultText.innerText = "If you’ve done much research or had any experience in computer programming, chances are you’ve seen Ruby programming discussed. Ruby is a highly popular programming language that’s used for lots of things, from web app development to data analysis. It’s also very user-friendly compared to other programming languages, and it’s fairly easy to learn if you’re willing to put in the work.";
}

function displayRust(resultImage, resultName, resultText){
  resultImage.src = "images/rust.png";
  resultName.innerText = "RUST";
  resultImage.alt = "the rust logo";
  resultText.innerText = "C# is a simple, modern, and an object-oriented programming language. The purpose of C# was to develop a programming language that is not only easy to learn but also supports modern day functionality for all kind of software development. It is commonly used in all sorts of development, including games and web development.";
}

function displayPython(resultImage, resultName, resultText){
  resultImage.src = "images/python.png";
  resultImage.alt = "the python logo";
  resultName.innerText = "PYTHON";
  resultText.innerText = "Python has become one of the most popular programming languages in the world in recent years. It's used in everything from machine learning to building websites and software testing. It can be used by developers and non-developers alike.";
}

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
  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");
  nextButton.className = "hidden";
  submitButton.className = "hidden";
  errorText.className = "hidden";
  question5Div.className = "hidden";
  suggestLanguage(q1Number, q3Number, q5Number);
}

function goNext() {
  const errorText = document.getElementById("error-text");
  const nextButton = document.getElementById("next-button");
  const resetButton = document.getElementById("reset-button");
  let selectedDiv = document.querySelector("div.current-active"); 
  let nextDiv;
  errorText.className = "hidden";
  nextButton.innerText = "Next";
  resetButton.className = "";
  if (selectedDiv.id === "question0"){
    selectedDiv.className = "hidden";
    document.getElementById("question1").className = "current-active";
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
}

function resetForm(){
  const initialQuestion = document.getElementById("question0");
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