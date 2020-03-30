/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time)
{
  const something = time.split(":")
  const number = parseInt(something[0], 10)

  return number > 0 && number < 12 ? "Good Morning" : 
  number > 11 && number < 18 ? "Good Afternoon" : 
  number > 17 ? "Good Evening" : "What planet are you on?"
}

/* Write your implementation of displayMessage() */

function displayMessage(content) 
{
  const greeting = document.querySelector("#greeting");
  greeting.innerText = content
}
