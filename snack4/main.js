/*Crea un array di numeri interi e fai la somma
 di tutti gli elementi che sono in posizione dispari*/

numeri = [2, 21, 13, 45, 34, 61, 38];

let somma = 0;

for (i = 0; i < numeri.length; i++) {

    let dispari = numeri[i]

    if (i % 3 == 0) {

        somma += dispari
    }
}
console.log(`la somma è ${somma}`)