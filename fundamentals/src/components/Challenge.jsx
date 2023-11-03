import React from "react";

const Challenge = () => {
    const numberOne = 1
    const numberTwo = 2

    const sum = (numberOne, numberTwo)=>{
        const result = numberOne + numberTwo
        return result
    }

    return (
        <div>
            <h3>Esse é o numero1: {numberOne}</h3>
            <h3>Esse é o numero2: {numberTwo}</h3>
            <button onClick={console.log(sum(numberOne,numberTwo))}>Clique aqui!</button>
            <p>A soma é: {sum(numberOne, numberTwo)}</p>
        </div>)}

export default Challenge