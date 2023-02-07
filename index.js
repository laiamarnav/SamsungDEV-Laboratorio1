function nameValidation(){
  var nameField = document.getElementById("_name");
  var iconError = document.getElementById("nameError");
  var nameError = document.getElementById('nameTextError');
  var nameFormField = document.getElementById('form-name');
  var expresionName = /^[A-Za-z\s]+$/;


  if(nameField.value == 0){
    nameError.innerHTML = "Rellene este campo";
    document.querySelector('#form-group-name .form-input-error').classList.add("form-input-error-active");
    iconError.classList.add("errorIcon");
    nameFormField.classList.add("form-group-input-incorrect");
    return false;

  } else if(expresionName.test(nameField.value)){
    nameError.innerHTML.remove;
    document.querySelector('#form-group-name .form-input-error').classList.remove("form-input-error-active");
    iconError.classList.remove("errorIcon");
    iconError.classList.add("successIcon");
    nameFormField.classList.remove("form-group-input-incorrect");
    nameFormField.classList.add("form-group-input-correct");
    return true;

  } else{
    nameError.innerHTML = "Nombre no válido";
    document.querySelector('#form-group-name .form-input-error').classList.add("form-input-error-active"); 
    iconError.classList.remove("successIcon");
    iconError.classList.add("errorIcon");
    nameFormField.classList.add("form-group-input-incorrect");
    return false;  
  }

}

function emailValidation(){
  var emailField = document.getElementById("_email");
  var iconError = document.getElementById("emailError");
  var emailError = document.getElementById('emailTextError');
  var emailFormField = document.getElementById('form-email');
  var expresionEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


  if(emailField.value == 0){
    emailError.innerHTML = "Rellene este campo";
    document.querySelector('#form-group-email .form-input-error').classList.add("form-input-error-active");
    iconError.classList.add("errorIcon");
    emailFormField.classList.add("form-group-input-incorrect");
    return false;

  } else if(expresionEmail.test(emailField.value)){
    emailError.innerHTML.remove;
    document.querySelector('#form-group-email .form-input-error').classList.remove("form-input-error-active");
    iconError.classList.remove("errorIcon");
    iconError.classList.add("successIcon");
    emailFormField.classList.remove("form-group-input-incorrect");
    emailFormField.classList.add("form-group-input-correct");
    return true;

  } else{
    emailError.innerHTML = "Email no válido";
    document.querySelector('#form-group-email .form-input-error').classList.add("form-input-error-active");
    iconError.classList.remove("successIcon");
    iconError.classList.add("errorIcon");
    emailFormField.classList.add("form-group-input-incorrect");
    target.setCustomValidity("'" + input.value + "' is not a Valid Email Address.");
    return false;  
  }
  
}

function passwordValidation(){
  var passwordField = document.getElementById("_password");
  var iconError = document.getElementById("passwordError");
  var passwordError = document.getElementById('passwordTextError');
  var passwordFormField = document.getElementById('form-password');
  var expresionPassword = /^[\s\S]{1,8}$/;


  if(passwordField.value == 0){
    passwordError.innerHTML = "Rellene este campo";
    document.querySelector('#form-group-password .form-input-error').classList.add("form-input-error-active");
    iconError.classList.remove("successIcon");
    iconError.classList.add("errorIcon");
    passwordFormField.classList.add("form-group-input-incorrect");
    return false;

  } else if(expresionPassword.test(passwordField.value)){
    passwordError.innerHTML.remove;
    document.querySelector('#form-group-password .form-input-error').classList.remove("form-input-error-active");
    iconError.classList.remove("errorIcon");
    iconError.classList.add("successIcon");
    passwordFormField.classList.remove("form-group-input-incorrect");
    passwordFormField.classList.add("form-group-input-correct");
    return true;

  } else{
    passwordError.innerHTML = "No debe tener más de 8 caracteres";
    document.querySelector('#form-group-password .form-input-error').classList.add("form-input-error-active");
    iconError.classList.remove("successIcon");
    iconError.classList.add("errorIcon");
    passwordFormField.classList.add("form-group-input-incorrect");
    return false;  
  }
}


const confirmPasswordValidation = () => {
  var confirmPasswordField = document.getElementById("_confirmPassword");
  var iconErrorConfirm = document.getElementById("confirmPasswordError");
  var confirmPasswordError = document.getElementById('confirmPasswordTextError');
  var confirmPasswordFormField = document.getElementById('form-confirmPassword');
  var inputPassword = document.getElementById("_password");

  if(confirmPasswordField.value == 0){
   confirmPasswordError.innerHTML = "Rellene este campo";
    document.querySelector('#form-group-confirmPassword .form-input-error').classList.add("form-input-error-active");
    iconErrorConfirm.classList.remove("errorIcon");
    iconErrorConfirm.classList.add("errorIcon");
    confirmPasswordFormField.classList.add("form-group-input-incorrect");
    return false;
    
}  else if (inputPassword.value === confirmPasswordField.value) {
    confirmPasswordError.innerHTML.remove;
    document.querySelector('#form-group-confirmPassword .form-input-error').classList.remove("form-input-error-active");
    iconErrorConfirm.classList.remove("errorIcon");
    iconErrorConfirm.classList.add("successIcon");
    confirmPasswordFormField.classList.remove("form-group-input-incorrect");
    confirmPasswordFormField.classList.add("form-group-input-correct");
    return true;

  } else { 
    confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
    document.querySelector('#form-group-confirmPassword .form-input-error').classList.add("form-input-error-active");
    iconErrorConfirm.classList.add("errorIcon");
    confirmPasswordFormField.classList.add("form-group-input-incorrect");
    return false; 
  }
};


function formValidation(){
   nameValidation();
   emailValidation();
   passwordValidation();
   confirmPasswordValidation();
  
  if(nameValidation() && emailValidation() &&  passwordValidation() && confirmPasswordValidation()){
    alert("La inscripción se ha procesado correctamente.");
  
  } else {
    return false;
  }
};


borderButton();

function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}