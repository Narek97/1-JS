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
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.status = 'working';
        this.name = name;
        this.ip = ip;
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);
