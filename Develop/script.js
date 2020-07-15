// Assignment Code
var generateBtn = document.querySelector("#generate");

// Length of password

  var charAmount = prompt("Enter the amount of charcters needed for your password. (minimum of 8/maximum of 128)");
if (charAmount < 8 || charAmount > 128){
  var charAmount = prompt("You must select a character amount between 8 and 128.")
}
console.log(charAmount);

//Include lowercase
var lowerCase = confirm("Should your password contain lowercase letters?");
console.log(lowerCase);

//Include uppercase
var upperCase = confirm("Should your password contain uppercase letters?");
console.log(upperCase);

//Include Special Characters
var specialChar = confirm("Should your password contain special characters?");
console.log(specialChar);

//Include Numerical Characters
var numericalChar = confirm("Should your password contain numbers?");
console.log(numericalChar);

function generatePassword() {

  var password = "";

  //Conditionals based on user input
  //Upper, Lower, Numbers, Special
    if (lowerCase == true && upperCase == true && specialChar == true && numericalChar == true){
      const passwordValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+1234567890";
      
      for (var i = 1; i <= charAmount; i++){
        
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
        }
      }

  //Upper, Lower, Numbers  
    if (lowerCase == true && upperCase == true && specialChar == false && numericalChar == true){
      const passwordValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
     

      for (var i = 1; i <= charAmount; i++){
        
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
        }
      }
  //Upper, Lower, Special  
  if (lowerCase == true && upperCase == true && specialChar == true && numericalChar == false){
    const passwordValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
   
    for (var i = 1; i <= charAmount; i++){
      
      password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));

      }
    } 

    //Upper, number, Special  
  if (lowerCase == false && upperCase == true && specialChar == true && numericalChar == true){
    const passwordValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+1234567890";
   
    for (var i = 1; i <= charAmount; i++){
      
      password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
      }
    }

    //Lower, Special, Number
  if (lowerCase == true && upperCase == false && specialChar == true && numericalChar == true){
    const passwordValues = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+1234567890";
   
    for (var i = 1; i <= charAmount; i++){
      
      password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
      }
    }
    
    //Upper, Lower  
  if (lowerCase == true && upperCase == true && specialChar == false && numericalChar == false){
    const passwordValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    for (var i = 1; i <= charAmount; i++){
      
      password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
      }
    }  

    //Upper, Special  
  if (lowerCase == false && upperCase == true && specialChar == true && numericalChar == false){
    const passwordValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    var password = ""; 

    for (var i = 1; i <= charAmount; i++){
      
      password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
      }
    } 
    
    //Upper, Number
    if (lowerCase == false && upperCase == true && specialChar == false && numericalChar == true){
      const passwordValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

      for (var i = 1; i <= charAmount; i++){
        
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
        }
      }

      //Lower, Special
      if (lowerCase == true && upperCase == false && specialChar == true && numericalChar == false){
        const passwordValues = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
        
        for (var i = 1; i <= charAmount; i++){
          
          password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
          }
        }
      
      //Lower, Number
      if (lowerCase == true && upperCase == false && specialChar == false && numericalChar == true){
        const passwordValues = "abcdefghijklmnopqrstuvwxyz1234567890";

        for (var i = 1; i <= charAmount; i++){
          
          password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
          }
        console.log(password);
        }

      //Special, Number
      if (lowerCase == false && upperCase == false && specialChar == true && numericalChar == true){
        const passwordValues = "!@#$%^&*()_+1234567890";
        
        for (var i = 1; i <= charAmount; i++){
          
          password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
          }
        console.log(password);
        }

        //Upper
        if (lowerCase == false && upperCase == true && specialChar == false && numericalChar == false){
          const passwordValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

          for (var i = 1; i <= charAmount; i++){
            
            password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
            }
          }

        //Lower
        if (lowerCase == true && upperCase == false && specialChar == false && numericalChar == false){
          const passwordValues = "abcdefghijklmnopqrstuvwxyz";
    
          for (var i = 1; i <= charAmount; i++){
            
            password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
            }
          }

        //Special
        if (lowerCase == false && upperCase == false && specialChar == true && numericalChar == false){
          const passwordValues = "!@#$%^&*()_+";
         
    
          for (var i = 1; i <= charAmount; i++){
            
            password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
            }
          }

        //Number
        if (lowerCase == false && upperCase == false && specialChar == false && numericalChar == true){
          const passwordValues = "1234567890";
          
          for (var i = 1; i <= charAmount; i++){
            
            password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length-1)));
            }
          }
          
          return password;

        }

          
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
