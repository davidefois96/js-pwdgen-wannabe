const nomeUtente = prompt("inserisci il tuo nome : ");
const cognomeUtente = prompt("inserisci il tuo cognome : ");
const colorePreferito = prompt("inserisci il tuo colore preferito : ");
let psw ;

console.log(nomeUtente);
console.log(cognomeUtente);
console.log(colorePreferito);


psw = (nomeUtente+cognomeUtente+colorePreferito+'24')

console.log(psw);

document.getElementById('output').innerHTML += psw ;