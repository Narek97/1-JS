//Prototype
const person = new Object({
    name: 'Max',
    age: 25,
    greet:function (){
        console.log('Greed')
    }
})

console.log(person);
person.greet()


Object.prototype.sayhello = () => {
    console.log('hello')
}

person.sayhello()

//orinak
const lena = Object.create(person)
console.log(lena);
lena.sayhello();

lena.name = 'Elena'
console.log(lena,person)






