// closure

function createCalcFunction(n) {

    return function () {
        console.log(100 * n)
    }
}
createCalcFunction(2)()

function createIncremental(n){
    return function (m) {
        return n + m
    }
}

console.log(createIncremental(4)(5));


function urlGenerator(domain){
    return function (url){
        return `https://${url}.${domain}`
    }
}

console.log(urlGenerator('com')('facebook'));
console.log(urlGenerator('ru')( 'Google'));

// orinak

function Bind(person,func){
    return function (...args){
        console.log('args',args);
        return func.apply(person,args)
        // return func.call(person)
    }

}

function logperson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name:'Max',age:22,job:'Frontend'}
const person2 = {name:'Jin',age:25,job:'SMM'}

Bind(person1, logperson)()
Bind(person2, logperson)()
