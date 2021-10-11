//chiedo all'utente quanti Km vuole percorrere e quanti anni ha
const userKilometer = prompt("Ciao quanti kilometri vuoi percorrere")
const userAge = prompt("Quanti anni hai?")

//calcolo costo della tratta 
let costoTratta = parseInt(userKilometer) * 0.21 
var costoTrattaDecimi = costoTratta.toFixed(2)

//calcolo sconto 20% 
let scontoMinorenni = costoTrattaDecimi * 20 / 100
console.log(scontoMinorenni);

const priceMinorenni = costoTrattaDecimi - scontoMinorenni

//calcolo sconto 40%
let scontoOver = costoTrattaDecimi * 40 / 100
console.log(scontoOver);

const priceOver = costoTrattaDecimi - scontoOver




//applicazione dello sconto a seconda dell'età 

if (userAge < 18) {
    document.getElementById("risultato"). innerHTML = `il costo del tuo biglietto è ${priceMinorenni} €`
}

else if (userAge > 65) {
    document.getElementById("risultato"). innerHTML = `il costo del tuo biglietto è ${priceOver} €`
    
}

else if (userAge >= 18 && userAge <= 65) {
    document.getElementById("risultato"). innerHTML = `il costo del tuo biglietto è ${costoTrattaDecimi} €`
}





