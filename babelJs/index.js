"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var popUp = document.getElementById('popUpDiv');
popUp.style.display = 'none';
var button = document.getElementById('#submitButton');
button.addEventListener("click", validateForm); // function validateEmail(email){
//     const patn =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!patn.test(email)){ 
//         console.log("invalid email");
//     }else{
//     // }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue3)){
//         console.log("Valid email found!!!");
//     }
// }

var divBox = document.querySelectorAll('.div4icons');
var inputBox = document.querySelectorAll('input');
var errorIcon = document.querySelectorAll('i');
var errorMessage = document.querySelectorAll('.errorMsg');
var congratulatoryInfo = document.querySelectorAll('.congratulatoryInputValue');
var popButton = document.getElementById('popUpButton');
var myForm = document.getElementById('myForm');
popButton.addEventListener('click', popUpOut);

function popUpOut() {
  popUp.style.display = 'none';
  myForm.reset();

  for (var x = 0; x < divBox.length; x++) {
    inputBox[x].disabled = false;
  }

  button.disabled = false;
}

function validateForm(e) {
  e.preventDefault();

  for (var i = 0; i < divBox.length; i++) {
    if (inputBox[i].value === '') {
      divBox[i].style.border = 'hsl(0, 100%, 74%)  2px solid';
      errorIcon[i].style.visibility = 'visible';
      errorMessage[i].style.visibility = 'visible'; // inputBox[i].placeholder = '';    
    } else if (inputBox[i].value !== '') {
      divBox[i].style.border = 'hsl(246, 25%, 77%) 2px solid';
      errorIcon[i].style.visibility = 'hidden';
      errorMessage[i].style.visibility = 'hidden'; // inputBox[i].placeholder = '';

      if (i === 2) {
        var patn = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!patn.test(inputBox[i].value)) {
          divBox[i].style.border = 'hsl(0, 100%, 74%)  2px solid';
          errorIcon[i].style.visibility = 'visible';
          errorMessage[i].textContent = 'Looks like this is not an email';
          errorMessage[i].style.visibility = 'visible';
          errorMessage[i].style.fontSize = '0.7rem';
          inputBox[i].style.color = "black"; // inputBox[i].placeholder = '';
        } else if (inputBox[i].value === '') {
          errorMessage[i].style.visibility = 'visible';
        }
      }
    }

    congratulatoryInfo[i].textContent = inputBox[i].value;

    if (errorMessage[i].style.visibility === 'hidden' && errorIcon[2].style.visibility === 'hidden') {
      showCongratulatoryMessage();
    }
  }
}

function showCongratulatoryMessage() {
  popUp.style.display = 'flex';

  for (var x = 0; x < divBox.length; x++) {
    inputBox[x].disabled = true;
  }

  button.disabled = true;
} // let type = document.getElementById('typing');
// type.style.display = 'none';
// inputBox[0].addEventListener('keydown', keydown);
// function keydown(e) {
//     type.style.display = 'flex';
//     console.log('typing')
// }
// let timer;
// inputBox[0].addEventListener('keyup', keyup);
// function keyup(e) {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//         type.style.display = 'none';
//         console.log('Not typing anymore')
//     }, 1000)
// }
//  This is just for testing babel here


var myArr = [1, 'iah', 4, 5];

for (var _i = 0, _myArr = myArr; _i < _myArr.length; _i++) {//   console.log(prop);

  prop = _myArr[_i];
}

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "sayHi",
    value: function sayHi() {// console.log(`Hi, ${this.name}`);
    }
  }]);

  return Person;
}();

var billy = new Person('Billy', 21);
billy.sayHi();
var sally = new Person('Sally', 16);