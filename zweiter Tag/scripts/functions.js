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

