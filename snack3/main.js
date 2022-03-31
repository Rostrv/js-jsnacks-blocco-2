/*Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.*/

nomi = ['Bruce', 'Dave', 'Adrian', 'Janick', 'Steve', 'Nicko']
cognomi = ['Dickinson', 'Murray', 'Smith', 'Gers', 'Harris', 'McBrain']
fake = []

for (let i = 0; i < 6; i++) {
    fake = nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)]
    console.log(fake)
}