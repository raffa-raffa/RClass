import React from 'react';

const TemplateExpressions = () =>{
const name = "Raffa"
const data = {
job:"Programmer",
nacionality:"Brazilian"}

return (
    <div>
    <h3>Hi, {name}!!! How are you?</h3>
    <h3>Do you works with: {data.job}</h3>
    </div>
    )
}

export default TemplateExpressions