

var eta = parseInt(prompt("inserisci la tua eta"));

var km = parseInt(prompt("inserisci il km"));


var kmPrice = km * 0.21;

console.log("km price " + kmPrice);

var minEta;
var maxEta;

if (eta < 18){
  minEta= kmPrice - ( kmPrice * 20 / 100 )
} else {
  minEta = kmPrice
}

// console.log("Teen Price offer" + minEta);

if (eta > 65) {
  maxEta =kmPrice - ( kmPrice * 40 / 100 )
}
else{
  maxEta = kmPrice
}

console.log("teen price offer " + minEta + " adult price offer " + maxEta);
