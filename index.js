function validateForm(){
    let divBox1 = document.getElementById('firstBox');
    let inputValue1 =document.myForm.FirstName.value;
    let inputBox1 = document.getElementById('first_Name');
    let errorIcon1 = document.getElementById('firstErrorIcon');
    let errorMessage1 = document.getElementById('errorMessage1');
    if (inputValue1 == ''){ 
        divBox1.style.border = 'hsl(0, 100%, 74%)  2px solid';
        errorIcon1.style.visibility = 'visible';
        errorMessage1.style.visibility = 'visible';
        inputBox1.placeholder = '';
    }else if(inputValue1 != ''){
        divBox1.style.border = 'hsl(246, 25%, 77%) 2px solid';
        errorIcon1.style.visibility = 'hidden';
        errorMessage1.style.visibility = 'hidden';
        inputBox1.placeholder = '';
    }


    let divBox2 = document.getElementById('secondBox');
    let inputValue2 =document.myForm.LastName.value;
    let inputBox2 = document.getElementById('second_Name');
    let errorIcon2 = document.getElementById('secondErrorIcon');
    let errorMessage2 = document.getElementById('errorMessage2');
    if (inputValue2 == ''){ 
        divBox2.style.border = 'hsl(0, 100%, 74%)  2px solid';
        errorIcon2.style.visibility = 'visible';
        errorMessage2.style.visibility = 'visible';
        inputBox2.placeholder = '';
    }else if(inputValue2 != ''){
        divBox2.style.border = 'hsl(246, 25%, 77%) 2px solid';
        errorIcon2.style.visibility = 'hidden';
        errorMessage2.style.visibility = 'hidden';
        inputBox2.placeholder = '';
    }


    let divBox3 = document.getElementById('thirdBox');
    let inputValue3 =document.myForm.Email.value;
    let inputBox3 = document.getElementById('email_Address');
    let errorIcon3 = document.getElementById('thirdErrorIcon');
    let errorMessage3 = document.getElementById('errorMessage3');
    // let patn = [a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$];
    let patn =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!patn.test(inputValue3)){ 
        divBox3.style.border = 'hsl(0, 100%, 74%)  2px solid';
        errorIcon3.style.visibility = 'visible';
        errorMessage3.textContent = 'Looks like this is not an email';
        errorMessage3.style.visibility = 'visible';
        errorMessage3.style.fontSize = '0.7rem';
        document.querySelectorAll('input')[2].style.color = "hsl(0, 100%, 74%)";
        inputBox3.placeholder = '';
        if(inputValue3 == ''){
            errorMessage3.textContent = 'Email cannot be empty';
        }
        
        }else{
            // }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue3)){
            divBox3.style.border = 'hsl(246, 25%, 77%) 2px solid';
            errorIcon3.style.visibility = 'hidden';
            errorMessage3.style.visibility = 'hidden';
            inputBox3.placeholder = '';
            // document.querySelectorAll('input')[2].style.color = "black";
            // document.querySelectorAll('input').style.backgroundColor = "black";
    }


    let divBox4 = document.getElementById('forthBox');
    let inputValue4 =document.myForm.Password.value;
    let inputBox4 = document.getElementById('password');
    let errorIcon4 = document.getElementById('forthErrorIcon');
    let errorMessage4 = document.getElementById('errorMessage4');
    if (inputValue4 == ''){ 
        divBox4.style.border = 'hsl(0, 100%, 74%)  2px solid';
        errorIcon4.style.visibility = 'visible';
        errorMessage4.style.visibility = 'visible';
        inputBox4.placeholder = '';
    }else if(inputValue4 != ''){
        divBox4.style.border = 'hsl(246, 25%, 77%) 2px solid';
        errorIcon4.style.visibility = 'hidden';
        errorMessage4.style.visibility = 'hidden';
        inputBox4.placeholder = '';
    }
    
}




function validateEmail(email){
    const patn =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!patn.test(email)){ 
        console.log("invalid email");
        
    }else{
    // }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue3)){
        console.log("Valid email found!!!");
    }
}

