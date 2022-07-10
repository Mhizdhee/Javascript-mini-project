// object to store details

let userDetailsDatabase = {}





function getUserDetails(){
    // userName
    let userName=prompt("Enter Your Username")

    if(userName==null){
        return
    }

    function validateUserName(userName){
        if (userName.length < 10 && userName.length > 0) {
            return true
        } else{
            return false
        }
    }
        while (validateUserName(userName) ==false) {
            userName=prompt("Username must be less than 10 and greater than 0")
        }
        userDetailsDatabase["userName"]=userName
    

    // emailAddress

    let email=prompt("Enter Your Email Address")

    if(email==null){
        return
    }


    function validateEmail(email){
        const emailcheck=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        emailCheckResult=emailcheck.test(email);
        if (emailCheckResult==true){
            return true
        } else{
            return false
        }
    }
        while (validateEmail(email)==false) {
            email=prompt("Enter a valid email")
        }
        userDetailsDatabase["Email"]=email
    
    
    //phoneNumber 

    let phoneNumber=prompt("Enter Phone Number")

    if((phoneNumber)==null){
        return
    }


    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length==11){
            return true
        } else {
            return false
        }
    }
        while (validatePhoneNumber(phoneNumber)==false){
            phoneNumber=prompt("Phone Number must be 11 digits,try again!")
        }
        userDetailsDatabase["PhoneNumber"]=phoneNumber
    

        // password

    let password=prompt("Enter your Password")

    if(password==null){
        return
    }

    function validatePassword(password){
        if (password.length < 6){
            return false 
        }else{
            return true
        }
    }
        while (validatePassword(password) ==false){
            password=prompt("password must not be less than 6 digits")

        }
         userDetailsDatabase["password"]=password
    

    // Confirmpassword

    let confirmPassword=prompt("Confirm Password")
    
    if(confirmPassword==null){
        return
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password) {
            return false 
        } else {
            return true 
        }
    }
         while (validateConfirmPassword(confirmPassword) ==false){
            confirmPassword=prompt("confirm password does not match password,try again!")         
        }
        

}

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nPhoneNumber: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.Email}`)
}