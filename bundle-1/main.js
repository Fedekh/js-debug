/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

//c'è un erorre riga 16, andrebbe messa LET anziche CONST in quanto viene inizializzata vuota, poi prenderà un valore dipendentemente dalla logica IF, inoltre l'if non servirebbe se c'è
//const myAge = 32; non c'è neanche il RETURN in entrambe le condizioni, io farei cosi

// function checkAge(age) {    
//     let message = '';
//     if (age < 18) {
//         message = `Sei troppo giovane! Hai ${age} anni!`;
//     return message;

        
//     } else {
//         message = 'Hai più di 18 anni!';
//     return message;

//     }
// }
// const ageUser = prompt("inserisci eta");
// checkAge (ageUser);
// console.log(checkAge);


// ########################################################################

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();
//c'è un errore di battitura del mitico LENGHT. va scritto cosi length :D



// ##########################################################################


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

//cosi scritto total fa concatenazione di stringhe, se volessi somma algebrica dovrei riscrivere cosi con parseint . guarda sotto

// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// #########################################################################################################################



// ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();
// qualche errore. nel primo if c'è solo un = invece che 2 o 3 meglio ancora, inoltre riga 95 deve essere booleano invece cosi è sottoforma di stringa, idem dicasi nel primo if. andrebbe riscritta cosi

function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}

checkAccess();
