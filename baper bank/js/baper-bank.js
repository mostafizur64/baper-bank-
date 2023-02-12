//add click event handler with the submit button
document.getElementById('submit-button').addEventListener('click',function(){
// step 2 
//get the email address form the email input field 
// always remember to use .Value to get the text form input field.
const emailField = document.getElementById('email-field');
const email = emailField.value;


//step -3
//get password
//set the id on the html element
//get the element
//get the value form the element
const passwordFiled = document.getElementById('password-field');
const password = passwordFiled.value;

// sept 4 
// DANGER: DO NOT VERIFY EMAIL AND password on client side = ==
//verify the email and password and check whether valid user or not!
if(email === 'mostafizurm01@gmail.com' && password === '901351'){
   window.location.href='bank.html';
}
else{
   alert('Not Come to my BANK!');
}
})

