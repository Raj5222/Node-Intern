class Person {
    constructor(name, age = 4, city = "Not Defined.") {
        this.name = name + "Const";
        this._age = age;
        this.city = city;
    }

    get name() {
        return this._name+"hell";
    }

    get age() {
        return this._age;
    }

    set name(name) {
        this._name = name;
    }

    set age(age) {
        this._age = age;
    }
}

const p2 = new Person("Alice");
console.log(p2.name);