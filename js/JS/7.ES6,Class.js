// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal {

    static type = 'Animal'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('i am Animal')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

console.log(animal);
animal.voice()

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color
    }

    voice() {
        super.voice()//tnox classi voice func kanchelu hamar
        console.log('i am Cat')
    }

    get ageInfo(){
        return this.age * 7
    }

    set ageInfo(newAge){
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})
console.log(cat);
cat.voice()
console.log(cat.ageInfo);
cat.ageInfo = 8
console.log(cat.ageInfo);

