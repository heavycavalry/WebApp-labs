class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  Show() {
    return document.body.innerHTML = `Witaj, jestem ${this.name} ${this.surname}, mam ${this.age} lat`;
  }
}

let p = new Person('John', 'Blake', 11);

p.Show();
