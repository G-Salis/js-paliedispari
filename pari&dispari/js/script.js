const pariDispari = prompt('Scegli pari o dispari');

const numPlayer = parseInt(prompt('Scegli un numero da 1 a 9')); 

let giocoValido = true;
let errorMsg = ''

// controllo la validità do pari o dispati
if(pariDispari !== 'pari' && pariDispari !== 'dispari'){
  giocoValido = false;
  errorMsg = 'Inserire pari o dispari in modo corretto';
}

// controllo se è stato inserito un numero
if(isNaN(numPlayer)){
  giocoValido = false;
  errorMsg = 'Inserire un numero valido';
}

// controllo se il nuero è > 0 e < 10
if(numPlayer < 0 || numPlayer > 9){
  giocoValido = false;
  errorMsg = 'Inserire un numero compreso fra 1 e 9';
}

console.log('giocoValido',giocoValido)
console.log('errorMsg',errorMsg)

let output = giocoevenodd(numPlayer)

let outputStr = `
  <strong>${output}</strong>

`
document.getElementById('output').innerHTML = outputStr;





function giocoevenodd(mynum){

const numPC = Math.floor(Math.random() * 9) + 1;

console.log('Giocata del PC ',numPC);

const sommaNum = numPC + mynum;
console.log('somma delle giocate',sommaNum);

let soluzione = 'pari';
console.log('MODULO 2',sommaNum % 2)
if(sommaNum % 2){
  soluzione = 'dispari';
}

console.log('soluzione',soluzione)


// confrontiamo la soluzione con la sceta dell'utente
let risultato = 'Hai perso';
if(pariDispari === soluzione){
  risultato = 'Hai vinto';
}


return risultato;

}

document.getElementById('output').innerHTML = outputStr;
