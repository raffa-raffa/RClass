import React from "react";
import "../components/CarDetails.css"

const CarDetails = ()=> {
    const carlist = [
        {name:"Fusca", marca:"WW", ano:"1990"},
        {name:"Renegade", marca:"Jeep", ano:"2023"},
        {name:"Golf", marca:"WW", ano:"2019"},
        {name:"CrossFox", marca:"WW", ano:"2005"},
]
return(
    <div className="mylist">
    <h3>Essa é a lista de carros</h3>
    {carlist.map((car)=>(<ul><li>Name:{car.name} - Marca:{car.marca} - Ano: {car.ano}</li></ul>))}
    </div>)
}

export default CarDetails