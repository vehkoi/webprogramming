import React from 'react'
import Header from "./Header";
import Contents from "./Contents";
import Total from "./Total";


const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Contents course={course} />
        <Total course={course} />
      </div>
    )
  }


export default Course