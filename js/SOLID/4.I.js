// Interface segregation principle

//Aranch Interface segregation principle
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     walk() {
//         console.log(`${this.name} umeyet xodit`)
//     }
//
//     swim() {
//         console.log(`${this.name} umeyet plavat`)
//     }
//
//     fly() {
//         console.log(`${this.name} umeyet letat`)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Rex')
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Orel')
// eagle.walk()
// eagle.swim()
// eagle.fly()
//
// const whale = new Whale('MobiDig')
// whale.walk()
// whale.swim()
// whale.fly()


// Interface segregation principle - ov
class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} umeyet plavat`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} umeyet letat`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} umeyet xodit`)
    }
}

class Dog extends Animal {
}

class Eagle extends Animal {
}

class Whale extends Animal {
}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rex')
dog.walk()
dog.swim()

const eagle = new Eagle('Orel')
eagle.walk()
eagle.fly()

const whale = new Whale('MobiDig')
whale.swim()
