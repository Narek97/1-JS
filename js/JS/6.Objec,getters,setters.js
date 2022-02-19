//Object.create
const person = Object.create(
  {
    //prototypum funkcianer stextelu hamar
    calculateAge() {
      console.log(new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'Max',
      enumerable: true, //vor tvyal obekty ereva,
      writable: true, //vor karananq dashteri valuen poxenq,
      configurable: true, //vor dashtery karananq jnjenq
    },
    birthYear: {
      value: 1995,
    },
    //getters i setters
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        console.log(value)
      },
    },
  }
)

person.name = 'Jon'
person.birthYear = 2000

for (let key in person) {
  console.log('Key', key)
}

console.log(person)
// getter
console.log(person.age)
//setters
person.age = 5

person.calculateAge()
