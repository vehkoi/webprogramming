const mongoose = require('mongoose')

const url = `mongodb+srv://Veeti:PASSWORD@cluster0.ovqyu.mongodb.net/personApp?retryWrites=true&w=majority`

mongoose.connect(url)
console.log('Connected to url')

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)


const person = new Person({
    name: process.argv[2],
    number: process.argv[3],
})

/** Method for adding people to database
 *  Commands in form "node mongo.js password name number" */
if(process.argv.length>2) {
    person.save().then(result => {
        console.log(`Adding person ${person.name} number ${person.number} to the directory`)
        mongoose.connection.close()
    })
}
else if(process.argv.length === 2) {
    /** Command "node mongo.js password" to log people in database to console */
    console.log('Phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}