interface Person {
  name: string;
  surname: string;
  age: number;
  role: string;
}

const users: Person[] = [
  { name: "John", surname: "Smith", age: 25, role: "user" },
  { name: "Adam", surname: "Johnson", age: 35, role: "user" },
  { name: "Andy", surname: "Cole", age: 18, role: "user" }
];

const admins: Person[] = [
  { name: "Matthew", surname: "Ryan", age: 43, role: "admin" },
  { name: "Adam", surname: "Terry", age: 24, role: "admin" }
];

function logPerson(person: Person) {
  console.log(`Imię:${person.name}, Nazwisko: ${person.surname}, Wiek: ${person.age}, Rola: ${person.role}`);
}

function filterPersons(persons: Person[], criteria: any): Person[] {
  let criteriaName: string | undefined = criteria["name"];
  let criteriaSurname: string | undefined = criteria["surname"];
  let criteriaAge: number | undefined = criteria["age"];
  let criteriaRole: string | undefined = criteria["role"];

  var filteredArray = persons
    .filter(person =>  person.name === criteriaName || criteriaName === undefined)
    .filter((person) => person.surname === criteriaSurname || criteriaSurname === undefined)
    .filter((person) => person.age === criteriaAge || criteriaAge === undefined)
    .filter((person) => person.role === criteriaRole || criteriaRole === undefined)
  return filteredArray;
}

function logPersons() {
  admins.forEach((person) => {
    console.log(`Admin => Name: ${person.name} Surname: ${person.surname}`);
  });
  users.forEach((person) => {
    console.log(`User => Name: ${person.name} Surname: ${person.surname}`);
  });
}

function logAllUsers() {
  const persons = [...admins, ...users];
persons.filter((person) => logPerson(person));
}

function logUsersOver25() {
const persons = [...admins, ...users];
const personsOver25 = persons.filter((person) => person.age > 25);
console.log(personsOver25);
}

logPersons();
console.log(filterPersons(admins, { name: "Adam" }));
logAllUsers();
logUsersOver25();