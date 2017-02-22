window.onload = initPage;

function initPage() {
  document.getElementById("username").onblur = 
    checkUsername;
    alert("Inside the initPage() function");
}

function checkUsername() {
  // get a request object and send
  // it to the server
  alert("Inside checkUsername()");
}

function showUsernameStatus() {
  //update the page to show whether
  // the user name is okay
}
