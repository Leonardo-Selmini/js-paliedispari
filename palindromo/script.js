let userWord = prompt('Inserisci una parola:');

if (palindromoMinus(userWord) == true) {
  document.getElementById('output').innerHTML = 
  `La parola ${userWord} è palindroma.`; 
} else {
  document.getElementById('output').innerHTML = 
  `La parola ${userWord} non è palindroma.`;
}

// 00000000 FUNZIONI 00000000
function palindromoPlus(word) {
  let myWord = '';
  for (let i = 0; i < word.length; i++) {
    myWord = word[i] + myWord;
  } if (myWord == word) {
    return true;
  }
  return false;  
}

function palindromoMinus(word) {
  let myWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    myWord += word[i]; 
  } if (myWord == word) {
    return true;
  } 
  return false;
}


