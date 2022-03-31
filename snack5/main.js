/*Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino 
a quando ne avrà tanti quanti l’altro.*/

let big = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(big)
let small = [1, 2, 3, 4, 5]
console.log(small)

for (let i = small.length; small.length < big.length; i++) {
    small.push(Math.floor((Math.random() * 100)));
}
console.log(small)