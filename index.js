/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let answer = string.split(":")
  if (answer[0] < 12) {
    return "Good Morning"
  } else if (answer[0] < 17 && answer[0] > 12) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let answer = document.getElementById("greeting")
  answer.innerText = string
}