//XHR

const url = 'http://jsonplaceholder.typicode.com/users'


// sendReques vor provisov ashxatenq

function sendReques(method,url,body=null) {
    return new Promise((resolve, reject) => {

        // XHR asinxron hardum serverin maqur JS-ov aranch urish gradaranneri
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        // vor json formatov cuych ta
        xhr.responseType = 'json'
        // post hardum uxarkelu hamar vor tvyalnery networkum tenanq
        xhr.setRequestHeader('Content-Type','application/json')

        // ekat tvyalnery cuych talu hamar
        xhr.onload = () => {
            // ete error chi baych rinak tench user chka
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        // errornery cuych talu hamar
        xhr.onerror = () => {
            reject(xhr.response)
        }
        // xhr mianalu  u post hardum uxarkelu hamar
        xhr.send(JSON.stringify(body))
    })
}

// get hardum
// sendReques('GET',url)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// post hardum
const body ={
    name:'Ara',
    age:26
}
sendReques('POST',url,body)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))