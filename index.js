/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){ 
  let newTime = time.split(":"); 
  let hour = parseInt(newTime[0])
    if (hour < 12) {
      console.log("Good Morning")
      return "Good Morning"
    }
    else if (hour > 12 && hour < 17){
      console.log("Afternoon")
      return "Good Afternoon"
    }
    else {
      return "Good Evening"
    }
  }
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let display = document.querySelector("#greeting")
  display.innerText = message
}
