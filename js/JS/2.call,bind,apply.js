//call,bind,apply
function hello() {
  console.log('Hello', this)
}

hello()

const person = {
  name: 'max',
  age: 26,
  sayhello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`)
    console.log(`Name is ${this.name}`)
    console.log(`age is ${this.age}`)
    console.log(`job is ${job}`)
    console.log(`phone is ${phone}`)
    console.groupEnd()
  },
}

person.sayhello()
person.sayHelloWindow()
person.logInfo()

const lena = {
  name: 'Elena',
  age: 23,
}

//Bind...............................
person.logInfo.bind(lena, 'Frontend', '8-999-12-45-25')()

// Call..............................
person.logInfo.call(lena, 'Frontend', '8-999-12-45-25')

//Apply..............................
person.logInfo.apply(lena, ['Frontend', '8-999-12-45-25'])

//Orinak

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function (n) {
  console.log(this)
  return this.map((i) => i * n)
}
console.log(array.multBy(2))
console.log(array.multBy(15))

Array.prototype.multBy = (arr, n) => {
  return arr.map((i) => i * n)
}
console.log(array.multBy(array, 2))
