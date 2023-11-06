import React from "react";

const MyFragment = ({propFragment}) => {
return (
    <React.Fragment>
    <h3>Primeiro Título</h3>
    <h3>Segundo Título</h3>
    <p>{propFragment}</p>
    </React.Fragment>
)}

export default MyFragment