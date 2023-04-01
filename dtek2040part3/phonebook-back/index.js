require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))


/** Persons page */
app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons =>{
      res.json(persons)
    })
})

/** Persons with specific id */
app.get('/api/persons/:id', (req,res) => {
  Person.findById(req.params.id)
  .then(person => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })
  .catch(error => {
    console.log(error)
    res.status(400).send({error: 'malformatted id'})
  })
})

/** Deleting specific id's, if delete is successful response with 204 */
app.delete('/api/persons/:id', (req,res) => {
  Person
  .findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(204).end()
  })
  .catch(error => {
    console.log(error)
    res.status(400).send({error: 'malformatted id'})
  })
})

/** Create new person with error handling */
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (body.name === undefined) {
    return res.status(400).json({error: 'Name missing'})
  }

  if (body.number === undefined) {
    return res.status(400).json({error: 'Number missing'})
  }

  else {
    const person = new Person({
      name: body.name,
      number: body.number,
    })
    person.save().then(savedPerson => {
      res.json(savedPerson)
    })
  }
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
