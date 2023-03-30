// Assignment Code
var generateBtn = document.querySelector("#generate");


var passPromt=function(){
 let user= prompt("Please enter your password lenght: 8-128", "8-128");
 if (!user){
  return;
 }
}

  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
}
 // Add event listener to generate button
//
generateBtn.addEventListener("click", writePassword);
