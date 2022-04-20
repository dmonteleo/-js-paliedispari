
//  const word = prompt("inserisci una parola");
//  const arrayWord = word.split("");
//  const arrayWordCopy = word.split("");
//  console.log(arrayWord);

//  const arrayInverse = arrayWordCopy.reverse();
//  console.log(arrayInverse);

//  let palindromo = true;

//  for ( i=0; i<arrayWord.length; i++){
//    if (arrayWord[i]!==arrayInverse[i]){
//      palindromo = false;
//    }
//  }

//  if (palindromo) {
//    console.log("palindromo");
//  }
//  else {
//    console.log("NON palindromo");
//  }

 

function isPalindrome() {
  const word = prompt("inserisci una parola");
  const arrayWord = word.split("");
  const arrayInverse = [];
  for (i=arrayWord.length-1; i>=0; i--) {
    arrayInverse.push(arrayWord[i]);
  }
  let palindromo = true;

  for ( i=0; i<arrayWord.length; i++){
   if (arrayWord[i]!==arrayInverse[i]){
     palindromo = false;
   }
  }

  // if (palindromo) {
  //  console.log("palindromo");
  // }
  // else {
  //  console.log("NON palindromo");
  // }
  return palindromo;
}

// isPalindrome();
// console.log(isPalindrome());

function game() {
  const user = prompt("pari o dispari?");
  const userNumber = parseInt(prompt("inserisci un numero da uno a cinque"));
  computerNumber = Math.floor(Math.random() * 5) + 1;
  const sum = userNumber + computerNumber;
  const check = sum % 2;
  let vincitore;
  if ((check === 0 && user === "pari") || (check=== 1 && user === "dispari")) {
    vincitore = "user";
  }
  else {
    vincitore = "computer"
  }

  console.log(vincitore);
  console.log(userNumber);
  console.log(computerNumber);
  console.log(sum);

  
}

game();




