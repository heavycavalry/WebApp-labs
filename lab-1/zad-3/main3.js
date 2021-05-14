var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: "John", surname: "Smith", age: 25, role: "user" },
    { name: "Adam", surname: "Johnson", age: 35, role: "user" },
    { name: "Andy", surname: "Cole", age: 18, role: "user" }
];
var admins = [
    { name: "Matthew", surname: "Ryan", age: 43, role: "admin" },
    { name: "Adam", surname: "Terry", age: 24, role: "admin" }
];
function logPerson(person) {
    console.log("Imi\u0119:" + person.name + ", Nazwisko: " + person.surname + ", Wiek: " + person.age + ", Rola: " + person.role);
}
function filterPersons(persons, criteria) {
    var criteriaName = criteria["name"];
    var criteriaSurname = criteria["surname"];
    var criteriaAge = criteria["age"];
    var criteriaRole = criteria["role"];
    var filteredArray = persons
        .filter(function (person) { return person.name === criteriaName || criteriaName === undefined; })
        .filter(function (person) { return person.surname === criteriaSurname || criteriaSurname === undefined; })
        .filter(function (person) { return person.age === criteriaAge || criteriaAge === undefined; })
        .filter(function (person) { return person.role === criteriaRole || criteriaRole === undefined; });
    return filteredArray;
}
function logPersons() {
    admins.forEach(function (person) {
        console.log("Admin => Name: " + person.name + " Surname: " + person.surname);
    });
    users.forEach(function (person) {
        console.log("User => Name: " + person.name + " Surname: " + person.surname);
    });
}
function logAllUsers() {
    var persons = __spreadArray(__spreadArray([], admins), users);
    persons.filter(function (person) { return logPerson(person); });
}
function logUsersOver25() {
    var persons = __spreadArray(__spreadArray([], admins), users);
    var personsOver25 = persons.filter(function (person) { return person.age > 25; });
    console.log(personsOver25);
}
logPersons();
console.log(filterPersons(admins, { name: "Adam" }));
logAllUsers();
logUsersOver25();
