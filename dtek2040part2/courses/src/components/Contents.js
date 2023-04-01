import React from 'react';
import Part from "./Part";

const Contents = ({course}) => {
    return(
        <div>
        {course.parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

export default Contents