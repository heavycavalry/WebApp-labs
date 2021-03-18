var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.Show = function () {
        return document.body.innerHTML = "Witaj, jestem " + this.name + " " + this.surname + ", mam " + this.age + " lat";
    };
    return Person;
}());
var p = new Person('John', 'Blake', 11);
p.Show();
