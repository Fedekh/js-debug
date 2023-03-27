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
//che anche il tipo di dato sia uguale.Inoltre non viene mai richiamata la funzione, inoltre sembra proprio un po inutile sta funzione. comunque una versione pseudocorretta potrebbe essere

// function addIfEven(num) {
//     if (num % 2 === 0) {
//         console.log(`il numero è pari e verrà aumentato di 5`);
//         return num + 5;

//     }
//     console.log(`mi dispiace ma è dispari`, num);
//     return num;
// }

// const g= parseInt(prompt("inserisci un numero"));
// addIfEven(g);
// console.log(g);

// #############################################################################################################


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

//problema nella sintassi del costrutto FOR ci sono le virgole al posto dei punti e virgola e sopratutto nn viene mai richiamata la funzione, anche qui basta richiamarla, e togliere le virgole e inserire punti e virgola

// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// loopToFive();

// #########################################################################################################################



// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
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


// non occorre l ultimo punto e virgola all interno del ciclo for dopo i++
// (numbers % 2 = 0) anziche (numbers % 2 === 0) per valutare un confronto anche del tipo di dato oltre che del valore
//inoltre non va fatto su numbers ma deve essere fatto ai suoi elementi interni ovvero numbers[i]
//punto e virgola dopo la condizione IF no bueno
// sempre nel ciclo for deve essere i < numbers.length e non i < numbers.length-1 oppure deve essere 
// non deve essere cosi evenNumbers.push(i); ma cosi  numbers.push(numbers[i]); ovvero l'elemento i esimo
//La dichiarazione della funzione return deve essere posizionata all'esterno del ciclo for, poiché altrimenti 
//la funzione terminerebbe subito dopo aver esaminato il primo elemento dell'array.


function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

displayEvenNumbers(); // [2, 4, 6, 8]
console.log(displayEvenNumbers());
