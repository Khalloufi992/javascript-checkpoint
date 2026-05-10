// -- Fonction 1 : Inverser une chaîne de caractères --
//
//   Idée : on lit le mot depuis la fin jusqu'au début,
//   et on construit un nouveau mot lettre par lettre.
//
//   Exemple : "hello"
//     i=4 → "o"
//     i=3 → "ol"
//     i=2 → "oll"
//     i=1 → "olle"
//     i=0 → "olleh"
 
function reverseString(str) {
    let reversed = "";                  // on commence avec un mot vide
 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];  // on ajoute chaque lettre en partant de la fin
    }
 
    return reversed;
}
 
console.log( reverseString("hello") );       // olleh
console.log( reverseString("JavaScript") );  // tpircSavaJ
 
 
// -- Fonction 2 : Compter le nombre de caractères --
//
//   .length nous donne directement le nombre de lettres.
//   C'est la façon la plus simple !
 
function countCharacters(str) {
    let count = str.length;
    return count;
}
 
console.log( countCharacters("hello") );     // 5
console.log( countCharacters("Bonjour") );   // 7
 
 
// -- Fonction 3 : Mettre une majuscule au premier mot --
//
//   Idée : on prend la 1ère lettre, on la met en majuscule,
//   puis on recolle le reste du mot.
//
//   str[0]          → première lettre
//   str.slice(1)    → tout le reste du mot (sans la 1ère lettre)
 
function capitalizeFirstWord(str) {
    let firstLetter = str[0].toUpperCase();  // "h" devient "H"
    let restOfWord  = str.slice(1);          // "ello"
    let result      = firstLetter + restOfWord; // "H" + "ello" = "Hello"
    return result;
}
 
console.log( capitalizeFirstWord("hello") );      // Hello
console.log( capitalizeFirstWord("javascript") ); // Javascript
 
 
 
// ==========================
// PARTIE 2 : LES TABLEAUX
// ==========================
 
 
// -- Fonction 4 : Trouver le maximum dans un tableau --
//
//   Idée : on suppose que le 1er nombre est le plus grand.
//   Ensuite on compare avec chaque autre nombre.
//   Si on trouve un plus grand, il devient le nouveau maximum.
 
function findMaximum(numbers) {
    let max = numbers[0];   // on part du 1er nombre
 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];  // on a trouvé un plus grand !
        }
    }
 
    return max;
}
 
console.log( findMaximum([3, 7, 1, 9, 4]) );  // 9
 
 
// -- Fonction 5 : Trouver le minimum dans un tableau --
//
//   Même idée que le maximum,
//   mais on cherche le plus PETIT nombre cette fois.
 
function findMinimum(numbers) {
    let min = numbers[0];   // on part du 1er nombre
 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];  // on a trouvé un plus petit !
        }
    }
 
    return min;
}
 
console.log( findMinimum([3, 7, 1, 9, 4]) );  // 1
 
 
// -- Fonction 6 : Calculer la somme d'un tableau --
//
//   Idée : on commence à 0, et on ajoute chaque nombre un par un.
//
//   [1, 2, 3, 4, 5]
//    0+1 = 1
//    1+2 = 3
//    3+3 = 6
//    6+4 = 10
//    10+5 = 15  ✓
 
function sumArray(numbers) {
    let total = 0;
 
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];  // on ajoute le nombre au total
    }
 
    return total;
}
 
console.log( sumArray([1, 2, 3, 4, 5]) );  // 15
 
 
// -- Fonction 7 : Filtrer un tableau (garder les nombres pairs) --
//
//   Un nombre est PAIR si le reste de sa division par 2 est égal à 0.
//   Exemples :
//     4 % 2 = 0  → pair ✓
//     5 % 2 = 1  → impair ✗
//
//   On crée un nouveau tableau et on y ajoute seulement les nombres pairs.
 
function filterEvenNumbers(numbers) {
    let evenNumbers = [];   // tableau vide au départ
 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);  // ce nombre est pair, on le garde
        }
    }
 
    return evenNumbers;
}
 
console.log( filterEvenNumbers([1, 2, 3, 4, 5, 6]) );  // [2, 4, 6]
 
 
 
// ==========================
// PARTIE 3 : LES MATHS
// ==========================
 
 
// -- Fonction 8 : Calculer la factorielle --
//
//   La factorielle de 5 s'écrit 5!
//   5! = 5 × 4 × 3 × 2 × 1 = 120
//   3! = 3 × 2 × 1 = 6
//   0! = 1  (c'est une convention en maths)
 
function factorial(n) {
    let result = 1;
 
    for (let i = 2; i <= n; i++) {
        result = result * i;  // on multiplie à chaque tour
    }
 
    return result;
}
 
console.log( factorial(5) );  // 120
console.log( factorial(3) );  // 6
console.log( factorial(0) );  // 1
 
 
// -- Fonction 9 : Vérifier si un nombre est premier --
//
//   Un nombre premier se divise uniquement par 1 et par lui-même.
//   Exemples : 2, 3, 5, 7, 11, 13 sont premiers.
//   9 n'est PAS premier car 9 = 3 × 3.
//
//   On teste si le nombre est divisible par 2, 3, 4, 5 ...
//   Si on trouve un diviseur → pas premier.
//   Si on ne trouve rien → premier !
 
function isPrime(n) {
    if (n <= 1) {
        return false;  // 0 et 1 ne sont pas premiers
    }
 
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;  // on a trouvé un diviseur → pas premier
        }
    }
 
    return true;  // aucun diviseur trouvé → c'est un nombre premier !
}
 
console.log( isPrime(7) );   // true  ✓ (7 est premier)
console.log( isPrime(9) );   // false ✗ (9 = 3 × 3)
console.log( isPrime(2) );   // true  ✓
 
 
// -- Fonction 10 : Générer la suite de Fibonacci --
//
//   Règle : chaque nombre = les deux nombres précédents additionnés.
//
//   Position :  0  1  2  3  4  5  6  7
//   Suite    :  0, 1, 1, 2, 3, 5, 8, 13 ...
//
//              0+1=1  1+1=2  1+2=3  2+3=5  3+5=8 ...
//
//   On commence toujours avec [0, 1],
//   puis on calcule la suite jusqu'au nombre de termes voulu.
 
function fibonacci(terms) {
    let sequence = [0, 1];  // les deux premiers termes sont toujours 0 et 1
 
    for (let i = 2; i < terms; i++) {
        let lastNumber         = sequence[i - 1];  // le nombre juste avant
        let secondLastNumber   = sequence[i - 2];  // le nombre deux positions avant
        let nextNumber         = lastNumber + secondLastNumber;  // leur somme
        sequence.push(nextNumber);  // on ajoute ce nouveau nombre à la suite
    }
 
    return sequence;
}
 
console.log( fibonacci(7) );  // [0, 1, 1, 2, 3, 5, 8]
console.log( fibonacci(5) );  // [0, 1, 1, 2, 3]
