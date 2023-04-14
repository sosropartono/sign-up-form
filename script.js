const message = document.createElement("p");
const middleBox = document.querySelector("div.middle-box")
const passwordError = document.querySelector(".password-error-msg");
message.style = "padding: 0; margin: 0; font-color: red;"
    

const passwordValid = () => {
    let password = document.querySelector(".password-input");
    let passwordConfirm = document.querySelector(".password-confirm-input");
    if(password.value == passwordConfirm.value && password.value.length > 0){
        passwordError.style = "color:green";

        passwordError.innerHTML = "nice password! :)"
    }
    else{
        console.log("false");
        passwordError.innerHTML = "passwords are not matching *"


    }

}


const button = document.querySelector("button")
button.addEventListener("click" , passwordValid)




