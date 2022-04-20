
// const word = prompt("inserisci una parola");
// const arrayWord = word.split("");
// const arrayWordCopy = word.split("");
// console.log(arrayWord);

// const arrayInverse = arrayWordCopy.reverse();
// console.log(arrayInverse);

// let palindromo = true;

// for ( i=0; i<arrayWord.length; i++){
//   if (arrayWord[i]!==arrayInverse[i]){
//     palindromo = false;
//   }
// }

// if (palindromo) {
//   console.log("palindromo");
// }
// else {
//   console.log("NON palindromo");
// }

// const input = document.querySelector("#input");
// console.log(input);
// input.innerHTML = "ciao";

function isPalindrome() {
  const word = prompt("inserisci una parola");
  const arrayWord = word.split("");
  const arrayInverse = [];
  for (i=arrayWord.length-1; i>=0; i--) {
    arrayInverse.push(arrayWord[i]);
  }
  console.log(arrayInverse);
}

isPalindrome();




