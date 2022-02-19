const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

// delay(2000).then(()=>{
//     console.log('2 s')
// })

const url = 'https://jsonplaceholder.typicode.com/todos'

////promisov
// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000).then(() => {
//         return fetch(url)
//     }).then((res) =>
//         res.json()
//     )
// }
//
// fetchTodos()
//     .then(data => console.log(data))
//     .catch(e => console.error(e))

////AsyncAwait
async function fetchAsyncTodos() {
    try {
        console.log('Fetch todo started...')
        await delay(2000)
        const res = await fetch(url)
        const data = await res.json()
        console.log('Data', data)
    }catch (e){
        console.error(e)
    }

}
fetchAsyncTodos()
