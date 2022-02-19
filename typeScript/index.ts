// let str: string = 'hello type script'
// let num: number = 42
// let isActive: boolean = false

//// ...............................................
//// Array
// let strArray: string[] = ['h', 'e', 'l', 'l', 'o']
// let numArray: Number[] = [1, 1, 2, 3]
// //// kam
// let strArray1: Array<string> = ['h', 'e', 'l', 'l', 'o']
// let numArray1: Array<number> = [1, 1, 2, 3]

//// ...............................................
//// Functions
// function logInfo(name: string, age: number): void {
//   console.log(`Info: ${name},${age}`)
// }

// logInfo('Vlad', 22)
// function calc(a: number, b: number | string): number {
//   if (typeof b === 'string') b = +b
//   return a + b
// }
// calc(2, '5')

//// ...............................................
//// Class
// class Server {
//   static VERSION = '1.0.3'

//   private status: string = 'working'

//   constructor(public name: string, protected ip: number) {}

//   turnOn() {
//     this.status = 'working'
//   }

//   turnOff() {
//     this.status = 'offline'
//   }

//   getStatus(): string {
//     return this.status
//   }
// }

// const server: Server = new Server('AWS', 1234)

interface SayHello {
  sayHello: () => void
}

class User implements SayHello {
  constructor(private name: string, private age: number) {}
  sayHello() {
    console.log(this.name + 'hello')
  }
}
