import React from 'react';

const Form = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return(
        <form onSubmit={addPerson}>
          <>
            Name: <input
            value={newName}
            onChange={handleNameChange}/>
          </>
          <br></br>
          <>
            Number: <input
            value={newNumber}
            onChange={handleNumberChange}/>
          </>
          <br></br>
          <>
            <button type="submit">Add</button>
          </>
        </form>
    )
}

export default Form