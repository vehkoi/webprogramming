import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button";
import Statistics from "./components/Statistics";

class App extends React.Component {
    /** Values for statistics */
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }
    /** Functions for buttons */
    addGood = () => {
        this.setState({ good: this.state.good +1})
        console.log("lisättiin hyvä")
    }
    addNeutral = () => {
        this.setState({ neutral: this.state.neutral +1})
        console.log("lisättiin neutraali")
    }
    addBad = () => {
        this.setState({ bad: this.state.bad +1})
        console.log("lisättiin huono")
    }

    render(){
    return (
     <>
        <h1>anna palautetta</h1>
        <Button method={this.addGood}  text="Hyvä" />
        <Button method={this.addNeutral} text="Neutraali" />
        <Button method={this.addBad} text="Huono" />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
     </>
    )
    }
}


  export default App