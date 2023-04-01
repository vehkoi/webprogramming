import React from 'react';

const Total = ({course}) => {
    
    var totalAmount = course.parts.reduce(function(sum,part){
        return sum + part.exercises
    },0)

    return (
        <p>Total: {totalAmount}</p>
    )
}







export default Total