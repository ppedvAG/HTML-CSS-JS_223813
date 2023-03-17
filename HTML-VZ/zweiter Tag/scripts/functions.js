// Funktionen
// Syntax:
// function identifier(optionale Parameter) { code_Block }
// Funktionen, die zu einem Objekt gehören nennen wir Methoden, z.b. console.log()
// Funktionen werden aufgerufen indem wir ihren Identifier schreiben und runde Klammern anhängen
// und dabei wenn nötig Parameter übergeben
console.log("Hallo"); // Funktionsaufruf mit Parameter
console.clear(); // Funktionsaufruf ohne Parameter
// Löscht den Verlauf der Konsole

// Erstellen einer einfachen Funktion ohne Rückgabe:
// Solche Funktionen geben in JS standard,mäßig undefined zurück

function greeter() {
    console.log("Hallo");
}

greeter();

// Erstellen einer einfachen Funktion mit Rückgabe:

function greetPerson(name) {
    return "Hallo " + name;
}

console.log(greetPerson("Max"));

// default Werte
// Falls eine Funktion mit zu wenigen Parametern aufgerufen wird, können wir sie mit default-Parametern
// also Fallback werten
function divide(numOne = 1, numTwo = 1) {
    return numOne / numTwo;
}

console.log(divide());

// Kontrollstrukturen
// if
// Bedingter Block
// Syntax:
// if (Bedingung) { code-Block }
// Können beliebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist
let numberOne = 20;
let numberTwo = 30;

if(numberOne < numberTwo)
{
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
// else if 
// muss immer auf if folgen
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
// else 
// wird ausgeführt falls der vorangehende if Block oder else if block falsch war
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung zu === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

// Logische Operatoren:
// && logisches und 1 < 2 && 1 < 3 => Nur true wenn beide bedingungen zutreffen
// || logische oder 1 < 4 || 1 < -10 => true sobald eine der Bedingungne wahr ist


// Übung:
// Schreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false sein#
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(6));

// Übung:
// Erstellt eine Funktionierende Uhr
// Bevor der Stunden Zeiger eins weiter tickt muss der Minuten Zeiger eine Umdrehung machen und bevor Minuten
// Zeiger eins weiter tickt muss der Sekunden Zeiger einen ganzen Durchlauf machen

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt
// bis zu der gezählt werden soll
// und jede dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden und nach den 
// obigen Regeln in der Konsole ausgegeben werden



// Rekursive Funktionen
// Funktionen, die sich in ihrem Körper selbst aufrufen
// Müssen immer eine Bedingung enthalten, damit es keine endlos Schleife wird
// Können schnell ineffizient werden, da es viele Funktionsaufrufe sind

function faculty(limit) {
    if(limit<2) {
        return 1;
    }
    else{
        return limit * faculty(limit - 1);
    }
}

// Lambda-Funktionen:
// ALternative zu den anonymen Funktionen

// Anonyme Funktionen sind Funktionen ohne identifier
// Weißt man im normalfall einer Variablen zu, damit sie wiederverwendbar sind
// Einfache anonyme Funktion

let sum = function (numOne, numTwo) {return numOne + numTwo};
let ergebnis3 = sum(9,6);

// Sind identisch zu normalen Funktionen

// Lambdas sind die kompate Alternative zu den anonymen Funktionen
// Pfeilfunktionen

let quadruple = (a) => a*4;
let square = (a) => a*a;

function vervierfachen (a) {
    return a * 4;
}

function quadrieren (a) {
    return a*a;
}

// Lambdas werden meistens als Parameter für andere Funktionen benutzt

// Wenn eine Lambda Funktion mehrzeilig wird, verliert sie einige ihrer Vorteile
let mehrzeilig = (a, b) => {
    a *= 2;
    b *= 2;
    return a * b;
}
// Wir brauchen dann wieder die geschweiften Klammern und das return Keyword
