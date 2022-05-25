let popUp = document.getElementById('popUpDiv');
popUp.style.display = 'none';

let button = document.getElementById('#submitButton');
button.addEventListener("click", validateForm);


// function validateEmail(email){
//     const patn =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!patn.test(email)){ 
//         console.log("invalid email");
        
//     }else{
//     // }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue3)){
//         console.log("Valid email found!!!");
//     }
// }


let divBox = document.querySelectorAll('.div4icons');
let inputBox =document.querySelectorAll('input');
let errorIcon = document.querySelectorAll('i');
let errorMessage = document.querySelectorAll('.errorMsg');

let congratulatoryInfo = document.querySelectorAll('.congratulatoryInputValue');
let popButton = document.getElementById('popUpButton');
let myForm = document.getElementById('myForm');

popButton.addEventListener('click', popUpOut);

function popUpOut(){
    popUp.style.display = 'none';
    myForm.reset(); 
    for (let x = 0; x < divBox.length; x++)
    inputBox[x].disabled = false;     
}

function validateForm(e){
    e.preventDefault();

    for (let i = 0; i < divBox.length; i++){
        if (inputBox[i].value === ''){
            divBox[i].style.border = 'hsl(0, 100%, 74%)  2px solid';
            errorIcon[i].style.visibility = 'visible';
            errorMessage[i].style.visibility = 'visible';
            // inputBox[i].placeholder = '';    

        }else if(inputBox[i].value !== ''){
            divBox[i].style.border = 'hsl(246, 25%, 77%) 2px solid';
            errorIcon[i].style.visibility = 'hidden';
            errorMessage[i].style.visibility = 'hidden';
            // inputBox[i].placeholder = '';
            if (i === 2) {
                let patn =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!patn.test(inputBox[i].value)) {
                divBox[i].style.border = 'hsl(0, 100%, 74%)  2px solid';
                errorIcon[i].style.visibility = 'visible';
                errorMessage[i].textContent = 'Looks like this is not an email';
                errorMessage[i].style.visibility = 'visible';
                errorMessage[i].style.fontSize = '0.7rem';
                inputBox[i].style.color = "black";
                // inputBox[i].placeholder = '';
                }else if(inputBox[i].value === ''){
                    errorMessage[i].style.visibility = 'visible';
                }
            }
        }
        congratulatoryInfo[i].textContent = inputBox[i].value;

        if (errorMessage[i].style.visibility === 'hidden' && errorIcon[2].style.visibility === 'hidden'){
            showCongratulatoryMessage();
        }    
    }    
}


function showCongratulatoryMessage () {
    popUp.style.display = 'flex';
    for (let x = 0; x < divBox.length; x++)
    inputBox[x].disabled = true;
}


