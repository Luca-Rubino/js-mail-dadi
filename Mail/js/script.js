console.log('mail')

let emailList,i=0

// creazione lista email
emailList = ["luca@gmail.com","alberto@gmail.com","roberta@gmail.com","sara@gmail.com","claudia@gmail.com","alfredo@gmail.com"]

// richiesta email all'utente
let email = emailList.indexOf(prompt('inserisci la tua email'))

// controllo email all'utente per vedere se è nella lista
if (email == emailList.indexOf(-1)){
    console.log('Non sei in lista')
} else
    console.log('Benvenuto')