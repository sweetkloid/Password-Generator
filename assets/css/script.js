

var characterLength=8; //this identifies the character we need the user to use

var choiceArr=[];//This is the container for the generator answer

//the variables the generator will be using and picking from inside the arrays:
const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters= ["!", "@", "$", "&", "*"];


var generateBtn = document.querySelector("#generate"); //this pulls into the "generate" sections of the html so we can add to it

function getPrompts(){ //the beging of the prompts the user will choice from to make their password
  choiceArr= []; //clearing out each pass through of the generator
  characterLength= parseInt(prompt("How many characters would you like your password to be: 8-128?")); //the first prompt for the user to go through
  
  if(isNaN(characterLength)|| characterLength<8|| characterLength>128){ //this makes sure the user is giving the correct number between 8-128
    alert("Please enter a number between 8-128.");
    return false; //if a number is not inserted correctly
  }

  if (confirm("Would you like to add lowercase letters?")){ //the next promts are a yes/true (ok) or no/false (cancel) question
    choiceArr = choiceArr.concat(lowerCase); //this stores their "yes" for the computer to use
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
return true; //all values have been choosen by user
}

generateBtn.addEventListener("click", writePassword); //when the user "clicks" the following will happen
 
function generatePassword(){ //this function allows the generater to use the variable arrays we have listed to create the password
var password="";
for(var i=0; i< characterLength; i++){
var randomIndex= Math.floor(Math.random() * choiceArr.length); //choices a random array number
password= password + choiceArr[randomIndex]; //this uses the users sollected attributes to make the password
}
return password; //this enters the password into the box provided on screen (not in prompt window)
}

function writePassword() { 
  var correctPrompts =getPrompts(); //the prompt window will open when we hit the button
  var passwordText = document.querySelector("#password"); //this pulls from the html so we can change it
  if(correctPrompts){ //when "yes" is entered we store the value
    var newPassword = generatePassword(); //this takes the generated password and plugs it in
    passwordText.value = newPassword;
  } else { //the value is empty if the user does not click any option
    passwordText.value = "";
  }
} 


