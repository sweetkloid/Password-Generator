// Assignment Code
var characterLength=8;
var choiceArr=[];
const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters= ["!", "@", "$", "&", "*"];


var generateBtn = document.querySelector("#generate");

function getPrompts(){
  choiceArr= [];
  characterLength= parseInt(prompt("How many characters would you like your password to be: 8-128?"));
  
  if(isNaN(characterLength)|| characterLength<8|| characterLength>128){
    alert("Please enter a number between 8-128.");
    return false;
  }

  if (confirm("Would you like to add lowercase letters?")){
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("Would you like to add uppercase letters?")){
    choiceArr = choiceArr.concat(alphabet);
  }
  if (confirm("Would you like to add special characters?")){
    choiceArr = choiceArr.concat(specialCharacters);
  }
  if (confirm("Would you like to add numbers?")){
    choiceArr = choiceArr.concat(numbers);
  }
return true;
}
//  Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
 
// Write password to the #password input
function writePassword() {
  var correctPrompts =getPrompts();
  var passwordText = document.querySelector("#password");
  if(correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
} 

function generatePassword(){
var password="";
for(var i=0; i< characterLength; i++){
var randomIndex= Math.floor(Math.random() * choiceArr.length);
password= password + choiceArr[randomIndex];
}
return password;
}
