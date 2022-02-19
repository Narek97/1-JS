

// function multiply(a,b){
//     return a * b
// }

const { multiply } = require("lodash");

function partial(fn){
    return function(...args){
        return fn.apply(this, fixed.concat(args))
    }
}

const double = partial(multiply,2)

console.log(double(8));