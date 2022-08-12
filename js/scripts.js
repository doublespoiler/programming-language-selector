// Business logic

  //branching for suggestion goes here

// UI logic

function handleSubmission(event){
  event.preventDefault();
  //do the thing
}

window.addEventListener("load", function() {
  const submit = document.getElementById("selectorForm");
  submit.addEventListener("submit", handleSubmission);
});