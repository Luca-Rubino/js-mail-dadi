console.log('Dadi')

const user = parseInt(Math.random()*6+1)/*numero random per 'l'utente da 1 a 6*/
const cpu = parseInt(Math.random()*6+1)/*numero random per la macchina da 1 a 6*/

console.log('Utente: '+user)/*mostro numero utente*/
console.log('Computer: '+cpu)/*mostro numero macchina*/

if (user > cpu) {
    console.log('You win') /*Vince l'utente*/
} else if (user == cpu){ 
    console.log('Parity') /*Parità*/
} else 
    console.log('you lose') /*perde l'utente*/