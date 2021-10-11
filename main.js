//chiedo all'utente quanti Km vuole percorrere e quanti anni ha
const userKilometer = prompt("Ciao quanti kilometri vuoi percorrere")
const userAge = prompt("Quanti anni hai?")

//calcolo costo della tratta 
let costoTratta = parseInt(userKilometer) * 0.21 
console.log(costoTratta);

//calcolo sconto 20% 
let scontoMinorenni = costoTratta * 20 / 100
console.log(scontoMinorenni);



//applicazione dello sconto a seconda dell'età 

if (userAge < 18) {
    console.log(costoTratta - scontoMinorenni);


}