// const counter = parseInt(document.getElementById('counter').innerHTML)


// get the counter to increment by 1 each second.

function incrementCounter() {
  let counter = document.getElementById('counter')
  let counterNumber = parseInt(counter.innerHTML)
  counterNumber += 1 
  counter.innerHTML = counterNumber
  console.log("+++++++")
}

setInterval(incrementCounter, 1000)

let plusBtn = document.getElementById('plus')

// button click, then adds to incrementCounter
  
plusBtn.addEventListener('click', incrementCounter)

let minusBtn = document.getElementById('minus')

function decrementCounter() {
  let counter = document.getElementById('counter')
  let counterNumber = parseInt(counter.innerHTML)
  counterNumber -= 1 
  counter.innerHTML = counterNumber
  console.log("--------")
}

minusBtn.addEventListener('click', decrementCounter)

const heartBtn = document.getElementById('heart')

let counterVal = document.getElementById('counter')


heartBtn.addEventListener('click', function(){

  
  
  
  // counterVal.innerHTML

  // every click, count the likes for that counterNumber

})










// incrementCounter + 1
// incrementCounter - 1
// incremantCounter stop