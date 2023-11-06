import React from "react";

// const MovieDatails = (props)=>{

//utilizando destructuring
const MovieDatails = ({name, ano, genero, newMovie})=>{
return (
    <div className="moviedetails">
        {/* <ul>
            <li>Nome: {props.name}</li>
            <li>Ano: {props.ano}</li>
            <li>Gênero: {props.genero}</li>
        </ul> */}

        {/*utilizando props destructuring*/}
        <ul>
            <li>Nome: {name}</li>
            <li>Ano: {ano}</li>
            <li>Gênero: {genero}</li>
        </ul>
        {newMovie && <p>Este filme é novo!</p>}
    </div>)}

    export default MovieDatails