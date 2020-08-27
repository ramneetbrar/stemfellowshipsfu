const myHeading = document.querySelector('h1');
myHeading.textContent = "STEM Fellowship SFU";


// let myButton = document.querySelector('button');
let myButton = document.getElementById('userBtn');
let myWelcomeHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myWelcomeHeading.innerHTML = 'Welcome to STEM Fellowship SFU, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myWelcomeHeading.innerHTML = 'Welcome to STEM Fellowship SFU, ' + storedName + '!';
}

myButton.onclick = function() {
  console.log("Hey I clicked the button");
  setUserName();
}
