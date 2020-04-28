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
}
genNumbers.push(generaRandom);
console.log(generatedNum);

var userNum = [];

for (var i = 0; i < 16; i++) {
  do {
      var userProvNum = parseInt(prompt("Inserisci il     tuo numero"));
      console.log(userNum);
    } while(isNaN(userProvNum)){
      document.getElementById('a').innerHTML = userProvNum + " - I caretteri inseriti non sono un numero , per favore inserire un numero intero!!!"
      console.log("Non un Numero !!")

  }
}
genNumbers.push(generatedNum)
userNum.push(userProvNum)

while (userNum.length <= genNumbers.length){
console.log(userNum, genNumbers)
userNum.length++;
}
