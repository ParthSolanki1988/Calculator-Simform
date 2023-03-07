let display = document.querySelector("#display");
let result = document.querySelector("#result");
let btton = document.querySelectorAll(".btn");

var memory = 0;

for (const item of btton) {

  item.addEventListener('click', (e => {
    var btnval = e.target.value;
    display.value += btnval;
  }));
}

// Function Of Calculation Operations
function calculate(){
  let x = display.value;
  display.value = eval(x);
  
}


function clearDisplay() {
  
  display.value = "";
}


function oneClear() {
  display.value = display.value.substr(0, display.value.length - 1);
}



function memoryClear(){
  x = localStorage.clear();
  x = 0;
  document.getElementById('result').innerHTML = x;
}

function memoryRecall(){
  var x = localStorage.getItem(memory,display.value);
  document.getElementById('result').innerHTML = x;
  // console.log(localStorage.getItem(memory,display.value));
}

function memoryPlus(){
  var result = Number(localStorage.getItem(memory,display.value)) + Number(display.value);
  // console.log(result);
  localStorage.setItem(memory , result);
  document.getElementById('result').innerHTML = result;
}


function memoryMinus(){
  var result = Number(localStorage.getItem(memory,display.value)) - Number(display.value);
  // console.log(result);
  localStorage.setItem(memory , result);
  document.getElementById('result').innerHTML = result;
}

function memoryStore(){
  localStorage.setItem(memory , display.value);
}







