import React from 'react';

/** Single statistic containing text and value */
const Statistic = ({text,statistic}) => {
    return(
    <tr>
        <td> {text} </td> 
        <td> {statistic} </td>
    </tr>
    )
}

export default Statistic
