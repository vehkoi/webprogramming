import React from 'react';
import Statistic from "./Statistic";

const Statistics = ({good,neutral,bad}) => {
    /**Count Total, return value from Total submits */
    const Total = good+neutral+bad;
    if (Total === 0) {
        return (
            <div>
            <h2> Statistiikka </h2>
            <p>Ei yhtään palautetta annettu </p>
            </div>
        )
    }
    else {
        return (
            <>
                <h2> Statistiikka </h2>
                <table>
                    <tbody>
                        <Statistic text = "Hyvä" statistic = {good} />
                        <Statistic text = "Neutraali" statistic = {neutral} />
                        <Statistic text = "Huono" statistic = {bad} />
                        <Statistic text = "Keskiarvo" statistic = {((good-bad)/Total).toFixed(1)}/>
                        <Statistic text = "Positiivisia" statistic = {((good/Total)*100).toFixed(1)+" %"}/>
                    </tbody>
                </table>
            </>
        )
        }
    }

export default Statistics
