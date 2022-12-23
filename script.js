
var generateBtn = document.querySelector("#generate");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}