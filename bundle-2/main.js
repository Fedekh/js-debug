/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
// errore nel costrutto FOR, in quanto non eseguira mai nulla se in primis inizializiamo i a zero e poi confrontiamo se è maggiore di 5, sarà subito falso e non eseguira mai il ciclo. 
// una correzione potrebeb essere. Almeno 5 volte le fa

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// ###################################################################################################################################


// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
// nella condizione dell if , c'è un solo uguale il che significherebbe assegazione di valore, mentre noi vogliamo fare un confronto e si fa con almeno 2 = se non addirittura 3 per essere sicuri
//che anche il tipo di dato sia uguale.Inoltre non viene mai richiamata la funzione, inoltre sembra proprio un po inutile. comunque una versione pseudocorretta potrebbe essere

function addIfEven(num) {
    if (num % 2 === 0) {
        console.log(`il numero è pari e verrà aumentato di 5`);
        return num + 5;

    }
    console.log(`mi dispiace ma è dispari`, num);
    return num;
}

const g= parseInt(prompt("inserisci un numero"));
addIfEven(g);
console.log(g);


// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]