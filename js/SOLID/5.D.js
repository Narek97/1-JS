// Dependency inversion principle

//aranch Dependency inversion principle
// class Fetch {
//     request(url) {
//         // return fetch(url).then(r => r.json())
//         return Promise.resolve('data from fetch')
//     }
// }
//
// class LocalStorage{
//     get(){
//         const dataFromLocalStorage = 'data from local storage'
//         return dataFromLocalStorage
//         // return localStorage.getItem('key')
//     }
// }
//
// class Database {
//     constructor() {
//         // this.fetch = new Fetch()
//         this.localStorage = new LocalStorage()
//     }
//
//     getData() {
//       // return this.fetch.request('vk.com')
//         return this.localStorage.get('key')
//     }
// }
//
// const db = new Database()
//
// console.log(db.getData());

// Dependency inversion principle - ov

class Fetch {
    request(url) {
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get(){
        const dataFromLocalStorage = 'data from local'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clinetGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clinetGet(key) {
        return this.localStorage.get(key)
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clinetGet(key)
    }
}

// const db = new Database(new FetchClient())
const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'));

