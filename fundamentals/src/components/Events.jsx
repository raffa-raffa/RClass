import React from "react";


const Events = () => {
    const handleMyEvent = (e) => {
    console.log("Ativou o evento!",e)
}

const renderSomething = (x) => {
if(x){
return <p>Renderizando isso</p>
    }else{
    return <p>Também posso renderizar isso!</p>
    }
}

return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div><button onClick={()=> console.log("Clicou!")}>Clique aqui também!</button></div>
    {renderSomething(true)}
    {renderSomething(false)}
    </div>
    )}

export default Events