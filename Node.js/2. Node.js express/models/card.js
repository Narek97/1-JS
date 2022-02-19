const path = require('path')
const fs = require('fs')

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "card.json"
)

class Card {

    // card um avelachnum enq nor course
    static async add(course) {
        const card = await Card.fetch()

        const idx = card.courses.findIndex(c => c.id === course.id)
        const candidate = card.courses[idx]
        if (candidate) {
            // kurs uje est
            candidate.count++
            card.courses[idx] = candidate
        } else {
            // nujna dobavit
            course.count = 1
            card.courses.push(course)
        }

        card.price += +course.price

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })

    }

    // verdnum enq carti tvyalnery u uxarkum card.hbs
    static fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(p, 'utf-8', (err, content) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })
    }

    static async remove(id) {
        const card = await Card.fetch()

        const idx = card.courses.findIndex(c => c.id === id)

        const course = card.courses[idx]

        if (course.count === 1) {
            // jnjel
            card.courses = card.courses.filter(c => c.id !== id)
        } else {
            // popoxel qanaky
            card.courses[idx].count--
        }

        card.price -= course.price
        
        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), err => {
                if (err) {
                    reject(err)
                } else {
                    resolve(card)
                }
            })
        })


    }

}

module.exports = Card