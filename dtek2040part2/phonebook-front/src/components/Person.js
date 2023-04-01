import React from 'react';

    const Person = ({name, number, removePerson}) => {
        return (
          <tr> 
            <td>{name}</td>
            <td>{number}</td>
            <td> <button onClick={removePerson}>Delete</button> </td>
          </tr>
        )
      }
  
export default Person