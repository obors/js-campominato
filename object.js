alert("Bievegniuto nel gioco CampoSminiato !!!!");
var playerName = prompt("Ciao, inserisci il tuo Nome");

document.getElementById("tittle").innerHTML = "Ciao, " + playerName + "!!!";

var genNumbers = [];

function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

for (var i = 0; i < 16; i++) {
  var generatedNum = generaRandom(1,100)
  console.log(generatedNum);
  genNumbers.push(generatedNum);
}

console.log(generatedNum);

while(isNaN())

var userNum = [];

for (var i = 0; i < 16; i++) {
  do {
      var userProvNum = parseInt(prompt("Inserisci il  tuo numero"));
      console.log(userNum);
    } while(isNaN(userProvNum)){
      document.getElementById('a').innerHTML = userProvNum + " - I caretteri inseriti non sono un numero , per favore inserire un numero intero!!!"
      alert("Non un Numero !!")

  }
}
genNumbers.push(generatedNum)
userNum.push(userProvNum)

while (userNum.length <= genNumbers.length){
console.log(userNum, genNumbers)
userNum.length++;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.


// generare 16 numeri tra 1 e 100 diversi uno dall'altro

// array con le mine
// var numeri_pc = mine_generator(16, 1, 100);
// console.log(numeri_pc);
//
// // array delle giocate dell'utente
// var numeri_consentiti = [];
// var giocata_vinta = 0;
// // ciclo per determinare se l'utente vince o perde
// do {
//     // chiedo i numeri all'utente finché non perde
//     // chiedo all'utente un numero
//     var numero_utente = parseInt(prompt('inserisci un numero tra 1 e 100'));
//     // e verifico se rispetta tutte le caratteristiche
//     // deve essere un numero, compreso tra 1 e 100 e deve essere un numero nuovo
//     if(is_valid(numero_utente) == true) {
//
//         // verifico se non è una mina
//         if(is_mine(numero_utente, numeri_pc) == true) {
//             // l'utente ha beccato una mina
//             alert('hai perso!');
//         } else if (numeri_consentiti.includes(numero_utente) == false) {
//             // verifico che il numero inserito dall'utente non è tra i numeri già inseriti dall'utente precedentemente
//             numeri_consentiti.push(numero_utente);
//             giocata_vinta = giocata_vinta + 1;
//         } else {
//             alert('Hai già inserito questo numero');
//         }
//
//     } else {
//         alert('hai inserito un numero non valido!');
//     }
//
// } while (numeri_consentiti.length != 84 && is_mine(numero_utente, numeri_pc) == false);
//
// if(numeri_consentiti.length == 84) {
//     alert('complimenti, hai vinto!!');
// } else {
//     alert('numero giocate: ' + giocata_vinta);
// }
//
// // funzione che vede se un numero è una mina
// // restituisce true se il numero inserito dall'utente è un numero presente nell'array mine, false altrimenti
// function is_mine(numero, mine) {
//     var trovato = false;
//     for (var i = 0; i < mine.length && trovato == false; i++) {
//         if(mine[i] == numero) {
//             trovato = true;
//         }
//     }
//     return trovato;
// }
//
// // funzione che genera n numeri random uno diverso dall'altro in un array
// function mine_generator(n, min, max) {
//     var mine = [];
//
//     // procedimento A
//     // ripeto 16 volte => genero 16 numeri
//     for (var i = 0; i < n; i++) {
//         // ciclo per verificare che i numeri siano diversi
//         // se il numero generato era già uscito, lo scarta e ne genera un altro
//         do {
//             var numero_random = Math.floor(Math.random() * (max - min + 1)) + min;
//         } while (mine.includes(numero_random));
//         // inserisco il numero nell'array predisposto a contenere le mine
//         mine.push(numero_random);
//     }
//
//     // // procedimento B
//     // do {
//     //     var numero_random = Math.floor(Math.random() * (max - min + 1)) + min;
//     //     if(mine.includes(numero_random) == false) {
//     //         mine.push(numero_random)
//     //     }
//     // } while (mine.length < 16);
//
//     // restituisco l'array con le 16 mine
//     return mine;
// }
//
// // funzione per validare il numero dell'utente
// function is_valid(numero) {
//     if(numero > 0 && numero <= 100 && isNaN(numero) == false) {
//         return true;
//     } else {
//         return false;
//     }
// }
