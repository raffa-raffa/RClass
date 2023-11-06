import React from "react";

const ChangeMessageState = ({handleMessage}) => {
const messages = ["oi", "olá", "hello", "hi"]
return (
    <div>
        <button onClick={()=> handleMessage(messages[1])}>1</button>
        <button onClick={()=> handleMessage(messages[2])}>2</button>
        <button onClick={()=> handleMessage(messages[3])}>3</button>
    </div>)}

export default ChangeMessageState