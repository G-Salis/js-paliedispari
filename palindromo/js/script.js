/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


let nome = prompt("digita la tua parola.");
let palindromo = palindrome(nome);

console.log(palindromo);


function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
          alert('la parola non è palindroma')
            return false;
        }
    }
    alert('la parola è palindroma')
    return true;
}