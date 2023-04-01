import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
  <h1>{props.course.name}</h1>
)


const Part = (props) => (
  <p>{props.name} {props.exercise} </p>
)

const Contents = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    </div>
  )
  }

const Total = (props) => (
  <p> Total {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises </p> 
)





const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }
  return (
    <>
      <Header course={course} />
      <Contents course={course} />
      <Total course={course} />
    </>
  )
  }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

