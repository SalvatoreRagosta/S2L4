/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    if (l1 <= 0 || l2 <= 0) {
      return "I lati del rettangolo devono essere positivi";
    } else {
      return l1 * l2;
    }
  }

  var lunghezza1 = 5;
var lunghezza2 = 3;
var risultato = area(lunghezza1, lunghezza2);
console.log(`L'area del rettangolo con lati ${lunghezza1} e ${lunghezza2} è ${risultato}`);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }
  
  var numero1 = 10;
  var numero2 = 10;
  var risultato = crazySum(numero1, numero2);
  console.log(`Il risultato di crazySum(${numero1}, ${numero2}) è ${risultato}`);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
    var differenzaAssoluta = Math.abs(numero - 19);
    if (numero > 19) {
      return differenzaAssoluta * 3;
    } else {
      return differenzaAssoluta;
    }
  }
  
  // Esempio di utilizzo:
  var numero = 25;
  var risultato = crazyDiff(numero);
  console.log(`Il risultato di crazyDiff(${numero}) è ${risultato}`);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }
  
  var numero1 = 50;

  console.log(`boundary(${numero1}): ${boundary(numero1)}`); // true
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return "EPICODE " + stringa;
    }
  }
  
  var input1 = "è il miglior corso";
  var input2 = "EPICODE è il miglior corso";
  
  console.log(`epify(${input1}): ${epify(input1)}`); // "EPICODE Hello, World!"
  console.log(`epify(${input2}): ${epify(input2)}`); // "EPICODE is awesome."
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    return stringa.split('').reverse().join('');
  }
  
  var input = "EPICODE";
  var risultato = reverseString(input);
  console.log(`reverseString(${input}): ${risultato}`); 
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
    var parole = stringa.split(' '); 
    for (var i = 0; i < parole.length; i++) {
      parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1); 
    }
    return parole.join(' '); 
  }
  
  var input = "salvatore ragosta di napoli";
  var risultato = upperFirst(input);
  console.log(`upperFirst("${input}"): ${risultato}`);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    if (stringa.length < 2) {
      return "";
    }
    return stringa.slice(1, -1);
  }
  
  var input = "Scaldabagno";
  var risultato = cutString(input);
  console.log(`cutString("${input}"): ${risultato}`); 
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    var numeriCasuali = [];
    for (var i = 0; i < n; i++) {
      var numeroCasuale = Math.floor(Math.random() * 11); 
      numeriCasuali.push(numeroCasuale);
    }
    return numeriCasuali;
  }
  
  var quantitaNumeri = 4;
  var risultato = giveMeRandom(quantitaNumeri);
  console.log(`giveMeRandom(${quantitaNumeri}): ${risultato}`);