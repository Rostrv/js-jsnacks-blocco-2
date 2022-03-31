/*l software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

/*ciclo for
let somma = 0

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt('inserisci un numero'))
    somma = somma + numero

}

console.log(somma)*/


let total = 0

let i = 1

while (i <= 5) {
    let numero = parseInt(prompt('inserisci un numero'))
    total = total + numero

    i++
}
console.log(total)