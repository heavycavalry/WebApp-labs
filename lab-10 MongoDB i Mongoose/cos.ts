let x = 1;

for (x; x<10; x++) {
    if (x % 2 === 0) {
        console.log(x);
    }
}

class Animal {
    constructor(protected name: string) {}
    introduce() {
        console.log(`Hello my name is ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(protected name: string) {
        super(name);
    }
    introduce() {
        console.log("HAU HAU");
        super.introduce()
    }
}

