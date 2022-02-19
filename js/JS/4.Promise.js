//Promise
console.log('Start')
const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('backendData...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

data.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then(clientData => {
    console.log('clientData', clientData)
}).then(() => {
    console.log('End')
})




