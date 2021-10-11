//chiedo all'utente quanti Km vuole percorrere e quanti anni ha
const userKilometer = prompt("Ciao quanti kilometri vuoi percorrere")
const userAge = prompt("Quanti anni hai?")

//calcolo costo della tratta 
let costoTratta = parseInt(userKilometer) * 0.21 

//calcolo sconto 20% 
let scontoMinorenni = costoTratta * 20 / 100
console.log(scontoMinorenni);

//calcolo sconto 40%
let scontoOver = costoTratta * 40 / 100
console.log(scontoOver);


//applicazione dello sconto a seconda dell'età 

if (userAge < 18) {
    console.log(costoTratta - scontoMinorenni);
}

else if (userAge > 65) {
    console.log(costoTratta - scontoOver);
}

else if (userAge >= 18 && userAge <= 65) {
    console.log(costoTratta);
}



