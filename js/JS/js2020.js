// // 1 mi qani asinxron patasxannery stanalu hamar
// const emulate = (id, ms) => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(id), ms)
// })
//
// const promises = [
//     emulate(1, 250),
//     emulate(2, 500),
//     emulate(3, 1500)
// ];
//
// //hin dzevy
// // async function old() {
// //     for (const promise of await Promise.all(promises)) {
// //         console.log("old", promise);
// //     }
// // }
// // old()
//
// //nor dzevy
// async function modern() {
//     for await (const promise of promises){
//         console.log(promise);
//     }
// }
// modern()

// // 2 Object
// const person = {
//     name:'Max',
//     age:38,
// }
// // Objectneri chervachox dashtery tesnelu hamar
// // konkret mi dashti hamar
// // console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// // bolor dashteri hamar
// console.log(Object.getOwnPropertyDescriptors(person));
//
// // Objecty (keyery u valunery matrichov(zangvatnerov) )sarqelu hmaar
// // console.log(Object.entries(person));
//
// // hmakaraky matrich objekti veratelu hamar
// // console.log(Object.fromEntries([ [ 'name', 'Max' ], [ 'age', 38 ] ]));
// // zangvaty matrich sarqelu hamar
// // console.log(Object.entries(['m','k','n']));


// // 3 String
// // bachatnery hanelu hmaar
// const store = '           Helo  World'
// const end = 'This is new JavaScript features       '
// // console.log((store + end).trim());
// //stringin skzbich qani bachat ani u inch avelachni
// console.log("wk".padStart(6,'www.'));
// //nuyny verjich
// console.log("wk".padEnd(6,'.com'));

// // Arrays
// //zangvati meji zangvatnery hanelu hamar
// const nested = ['a','b',['c','d'],['e',['f','g']]]
// // aranch parametr menak zangvati meji araji zangvatna hanum
// // console.log(nested.flat());
// // parametrov talis enq te qani zangvat ka zangvati mej vor hani
// // console.log(nested.flat(2));
//
// const techs = ['react redux','angular','vue','deno and node']
// // ete uzum enq amen toxi mej grvat erku bary nor tox darna
// console.log(techs.flatMap(tech => tech.split(' ')));


// //Class
// class Person {
//     //constructorum chgrelu hamar
//     name = 'unknown name'
//     //# privat dasht stextelu hamar
//     #year = 1993
//
//     get age(){
//         return new Date().getFullYear() - this.#year
//     }
// }
//
// const person = new Person();
// console.log(person.name);
// console.log(person.age);


