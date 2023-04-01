import React from 'react';
import axios from 'axios'
import Person from "./components/Person"
import Form from "./components/Form"

const baseUrl = '/api/persons/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
  }
    /** Make HTTP GET request to server */
    componentDidMount() {
      console.log("Did mount")
      axios
        .get(baseUrl)
        .then(response => {
          console.log("Promise fulfilled")
          this.setState({ persons: response.data})
      })
  }

    /** Adds name to persons list after "Add" button is pressed. Alerts if name or number is already in the list.
     *  Clears "Name" and "Number" textfields after submission */
    addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      if(this.state.persons.some(person => person.name === this.state.newName)){
        alert("Name is already in the list")
      }
      else{
        //** If name not in list, send personObject to server */
          axios.post(baseUrl, personObject)
            .then(response => {
            console.log(response)
            this.setState({
              persons: this.state.persons.concat(response.data),
              newName: '',
              newNumber:''
            })
          })
        }
      }
      
    /** Removes person from server */
    removePerson = (id) => {
      const url = baseUrl + id
      const person = this.state.persons.find(p => p.id === id)
      if (window.confirm(`Do you want to delete ${person.name} `)) {
        axios
        .delete(url,id)
        this.setState({
          persons: this.state.persons.filter(person => person.id !== id)
        })
        }
      }

    /** Handles changes in textfield "name" and "number" */
    handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({newName: event.target.value})
    }

    handleNumberChange = (event) => {
      console.log(event.target.value)
      this.setState({newNumber: event.target.value})
    }

  
  

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form
        addPerson={this.addPerson}
        newName={this.state.newName}
        newNumber={this.state.newNumber}
        handleNameChange={this.handleNameChange}
        handleNumberChange={this.handleNumberChange}
        />

        <h2>Numbers:</h2>
        <>
          <table>
            <tbody>
              {this.state.persons.map((person) =>
                <Person
                key={person.id}
                name={person.name}
                number={person.number}
                removePerson={() => this.removePerson(person.id)} />)}
            </tbody>
          </table>
        </>
      </div>
    )
  }
}


export default App