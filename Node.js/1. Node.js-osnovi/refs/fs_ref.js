const fs = require('fs')
const path = require('path')

//// papka sarqelu hamar
// fs.mkdir(path.join(__dirname,'notes'),(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Papka bilo sozdana')
// })

// file stextelu hamar
// fs.writeFile(
//     // notes - papki anuny,mynotes.txt - file anuny
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     "Hello word",
//     (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('file bil sozdan')

//         // stextvat faylum urish ban aveachnelu hamar
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' from appenf file',
//             err => {
//                 if (err) {
//                     throw err
//                 }
//                 console.log(' file bil izminyon')
//             }
//         )
//     }
// )


//fs.readFile file kardalu hamar sench ashxatuma asinxron sinxron ashxatelu hamar
// es kody piti grvi appendFile-i console.log-ic heto
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err,data)=>{
//         if (err) {
//             throw err
//         }
//         // console.log(data)
//         // console.log(Buffer.from(data).toString())

//     }
// )

// file anuny poxelu hamar
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) {
            throw err
        }

        console.log('file pereimenovan')
    }
)