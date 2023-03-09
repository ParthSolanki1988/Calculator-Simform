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


//radians to degree using degree funcation (DEG button)
function degree(){
  display.value = (display.value * Math.PI / 180).toFixed(2);
}


//F-E means Fixed to Exponent (ex. 60000000 -> 6e+7) (F-E button)
function fixedExpo(){
  let value = Number(display.value).toExponential();
    display.value = value;
}

//memory clear using MC  (MC button)
function memoryClear(){
  x = localStorage.clear();
  x = 0;
  document.getElementById('result').innerHTML = x;
  display.value = "";
}

//Memory Recall using MR (MR button)
function memoryRecall(){
  var x = localStorage.getItem(memory,display.value);
  document.getElementById('result').innerHTML = x;
  // console.log(localStorage.getItem(memory,display.value));
  display.value = x;
}


//memory plus using M+ (M+ button)
function memoryPlus(){
  var result = Number(localStorage.getItem(memory,display.value)) + Number(display.value);
  // console.log(result);
  localStorage.setItem(memory , result);
  document.getElementById('result').innerHTML = result;
}


//memory minus using M- (M- button)
function memoryMinus(){
  var result = Number(localStorage.getItem(memory,display.value)) - Number(display.value);
  // console.log(result);
  localStorage.setItem(memory , result);
  document.getElementById('result').innerHTML = result;
}


//memory store using MS (MS button)
function memoryStore(){
  localStorage.setItem(memory , display.value);
  var memry = localStorage.getItem(memory,display.value);
  document.getElementById('result').innerHTML = memry;
}

//Trigonometry function
function trignometry() {
  let x = document.getElementById('trigno').value;
  if (x == 'sin') {
      sin();
  } else if (x == 'cos') {
      cos();
  } else if (x == 'tan') {
      tan();
  }
}
function sin() {
  display.value = Math.sin(display.value * Math.PI / 180).toFixed(2);
}

function cos() {
  display.value = Math.cos(display.value * Math.PI / 180).toFixed(2);
}

function tan() {
  display.value = Math.tan(display.value * Math.PI / 180).toFixed(2);
}


//Functions function
function func() {
  let x = document.getElementById('func').value;
  if (x == 'abs') {
    myAbs();
  } else if (x == 'floor') {
    myFloor();
  } else if (x == 'ceil') {
    myCeil();
  }
}
function myAbs() {
  display.value = Math.abs(display.value);
}

function myFloor() {
  display.value = Math.floor(display.value);
}

function myCeil() {
  display.value = Math.ceil(display.value);
}

//pi function
function pi(){
  if(display.value == 0){
    display.value = 3.14;
  }
  else{
    display.value = (display.value * 3.14);
  }
}


//Euler's Number funcation
function e(){
  display.value =  2.7182818284;
}



//clear display (C button)
function clearDisplay() {
  display.value = "";
}


//clear one by one (<- button)
function oneClear() {
  display.value = display.value.substr(0, display.value.length - 1);
}



//x^2 funcation
function xpower(){
  display.value = Math.pow(display.value,2);
}

//one by any number funcation
function oneByNumber(){
  display.value = 1 / display.value;
}


//absulate value funcation
function absulatevalue(){
  display.value = Math.abs(display.value);
}

//exponantial value funcation
function exponential(){
  display.value = Math.exp(display.value);
}

function sqroot(){
  display.value = Math.sqrt(display.value);
}


function powX(){
  display.value = Math.pow(10, display.value);
}


function log(){
  display.value = Math.log10(display.value).toFixed(2);
}

function ln(){
  display.value = Math.log(display.value).toFixed(2);
}

function factorial() {
  var i, num, fact;
  fact = 1;
  num = display.value;
  for (i = 1; i <= num; i++) {
      fact = fact * i;
  }

  i = i - 1;

  display.value = fact;
}

function plusMinus(){
  display.value = display.value * -1;
}