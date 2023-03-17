// Classes in JS
// Syntactic Sugar für Objekt-Erstellung
// function introduce() {
//    console.log(`Hi my Name is ${this.name}`);
//}

/* 
    function Person(name) {
        this ist ein Platzhalter für die neuerstellte Instanz des Objektes
        this.name = name;
        this.introduce = introduce;
    }
*/

class Person {
    // mit hashtag definiere ich ein privates Feld
    // Kann nur noch durch Klassen-Methoden aufgerufen werden und nicht direkt
    #age;

    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // Setter
    set age(newAge) {
        console.log("Setter wurde augerufen");
        if(newAge < this.age) {
            console.error("Man kann nicht jünger werden");
        }
        else {
            this.#age = newAge;
        }
    }

    // Getter
    get age() {
        console.log("Getter wurde aufgerufen");
        return this.#age;
    }

    #introduce() {
        return `Hi my Name is ${this.firstName} ${this.lastName}!`;
    }

    introduceSelf() {
        console.log(this.#introduce());
        return this.#introduce();
    }
}


const p1 = new Person("Max", "Mustermann", 29, "male");

// Mit extends leiten wir eine Klasse von einer basis Klasse ab
class Student extends Person {
    constructor (firstName, lastName, age, gender, schoolClass) {
        super(firstName, lastName, age, gender);
        this.schoolClass = schoolClass;
    }

    showGrade() {
        return Math.floor(Math.random() * 6) + 1;
    }

    introduceSelf() {
        console.log(`My name is ${this.firstName} and I'm in class ${this.schoolClass}`);
    }
}

const p2 = new Student("Erika", "Musterfrau", 17, "female", 11);

console.log(p2.showGrade());

// Erstellt eine Klasse Teacher, die von Person abgeleitet wird un zusätzlich ein privates Feld mit "subject" hat
// Die Methode introduceSelf() soll erwetert oder überschrieben werden um zusätzlich das subject anzuzeigen
// Zusätzlich einen getter und setter für subject erstellen