let userWord = prompt('Inserisci una parola:');
let myWord = '';

for (let i = 0; i < userWord.length; i++) {
  myWord = userWord[i] + myWord;
}
console.log(myWord);
if (myWord == userWord) {
  document.getElementById('output').innerHTML = `La parola ${userWord} è palindroma.`;
} else {
  document.getElementById('output').innerHTML = `La parola ${userWord} non è palindroma.`;
}




// for (let i = userWord.length;i <= userWord.length && i > 0; i--) {
//   myWord += userWord[i];
// }
