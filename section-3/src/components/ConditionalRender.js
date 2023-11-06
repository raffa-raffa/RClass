import React,{ useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Bob")

    return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        {name === "Rex" ? (
        <div>O nome é Rex!</div>) : (
        <div>Nome não encontrado</div>)}
        <button onClick={()=> setName("Rex")}>Clica  aqui!</button>
    </div>
    )
};

export default ConditionalRender;