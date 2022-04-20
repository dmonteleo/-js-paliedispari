
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

isPalindrome();
console.log(isPalindrome());




