//FETCH

const url = 'http://jsonplaceholder.typicode.com/users'

//// sendReques vor promisov ashxatenq

function sendReques(method, url, body = null) {

    // post hardman tvyalnery consolum tenalu hamar
    const headers = {
        'Content-Type': 'application/json'
    }

    //nod in uxarkelu hamar
    // if(body){
    //     body = JSON.stringify(body)
    //     headers['Content-Type'] = 'application/json'
    // }

    // fetch asinxron hardum serverin maqur JS-ov aranch urish gradaranneri
    // ete methody chenq nshum defoult GET metoda haskanaum
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers
    }).then(res => {
        // erornery tarberelu u cuych talu hamar
        if (res.ok) {
            // ekat get tvyalnery json tesqov stanalu hamar
            return res.json()
        } else {
            return res.json().then(err => {
                const e = new Error('error server')
                e.data = error
                throw e
            })
        }
    })
}

//// get hardum
// sendReques('GET',url)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// post hardum
const body = {
    name: 'Ara',
    age: 26
}
sendReques('POST', url, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// ................................
// classneri tesqov

class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Error ${url}`)
        }
        return await res.json();

    }

    async grtAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)

    }


}

const swapi = new SwapiService();

swapi.grtAllPeople().then((body) => {
    console.log(body)
})

swapi.getPerson(3).then((body) => {
    console.log(body.name)
})