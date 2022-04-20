const word = prompt("inserisci una parola");
const arrayWord = word.split("");
const arrayWordCopy = word.split("");
console.log(arrayWord);

const arrayInverse = arrayWordCopy.reverse();
console.log(arrayInverse);

let palindromo = true;

for ( i=0; i<arrayWord.length; i++){
  if (arrayWord[i]!==arrayInverse[i]){
    palindromo = false;
  }
}

if (palindromo) {
  console.log("palindromo");
}
else {
  console.log("NON palindromo");
}


