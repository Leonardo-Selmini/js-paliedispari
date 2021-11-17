let userNumber = 0;
let myNumber = 0;
let sum = 0;

document.getElementById('pari').addEventListener('click', function () {
  document.getElementById('user-title').classList.remove('orange', 'green');
  document.getElementById('my-title').classList.remove('orange', 'green');
  document.getElementById('user-title').classList.add('green');
  document.getElementById('my-title').classList.add('orange');
  doTheMath();
  if (sum % 2 == 0) {
    return document.getElementById('winner').innerHTML = 
    `<h2 class="green">You Win!</h2>`
  }
  return document.getElementById('winner').innerHTML = 
  `<h2 class="orange">You Lose!</h2>`
});

document.getElementById('dispari').addEventListener('click', function () {
  document.getElementById('user-title').classList.remove('orange', 'green');
  document.getElementById('my-title').classList.remove('orange', 'green');
  document.getElementById('user-title').classList.add('orange');
  document.getElementById('my-title').classList.add('green');
  doTheMath();
  if (sum % 2 == 0) {
    return document.getElementById('winner').innerHTML = 
    `<h2 class="green">You Lose!</h2>`
  }
  return document.getElementById('winner').innerHTML = 
  `<h2 class="orange">You Win!</h2>`
});

// 00000000 FUNZIONE 00000000
function doTheMath() {
  // chiedo un numero
  userNumber = parseInt(prompt('Choose a number between 1 and 5.'));
  // controllo che sia un numero intero tra 1 e 5
  while (isNaN(userNumber) == true || userNumber.length == 0 || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt('You have not entered a number between 1 and 5.'));
  }
  // genero un numero per il computer tra 1 e 5
  myNumber = Math.floor(Math.random() * 5 + 1);
  // stampo i due numeri
  document.getElementById('user-number').innerHTML = userNumber;
  document.getElementById('my-number').innerHTML = myNumber;
  // faccio la somma dei due numeri
  sum = userNumber + myNumber;
  // stampo la somma
  document.getElementById('sum').innerHTML = `The sum is <span>${sum}`;
}