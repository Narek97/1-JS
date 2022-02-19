const obj = {
    name: 'Max',
    age: 25,
    job: 'Frontend'
}

const entries = [
    ['name', 'Max'],
    ['age', 25],
    ['job', 'Frontend']
]

const map = new Map(entries)

console.log(map.get('job'))

map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'Nan ??')

console.log(map);

map.delete('job')

console.log(map)
console.log(map.size) //keyeri qanaky imanalu hamar
console.log(map.clear()) //bolor keyery jnjelu hamar





