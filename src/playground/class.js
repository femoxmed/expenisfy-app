class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getMajor() {
        return !!this.major
    }

    getDescription() {

        let a = `${this.name} is ${this.age} years old`
        console.log(`${this.name} is ${this.age} years old`)
        return a
    }


}

class Student extends Person {

    constructor(name, age, major = 'undefined') {
        super(name, age);
        this.major = major;
    }
    getMajor() {

        let status = !!this.major
        console.log(status)
        return status
    }

    getDescription() {
        let getDesc = super.getDescription()
        console.log(getDesc)
        return getDesc
    }

}

const Pers = new Person('Andrew Mead', 23)
console.log(Pers)

const stud = new Student('andrerw', 334, 'eee')
stud.getMajor()
stud.getDescription()
console.log(stud)