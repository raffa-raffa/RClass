import React from "react";

const UserListRender = ({name, age, profession}) => {

    return (
        <div className="userlist">
            <div>
            <p>Name:{name} - Idade:{age} - Profissão: {profession}</p>
            {age > 18 ? <p>Pode tirar habilitação</p>: <p>Não tem idade para tirar habilitação</p>}
            </div>
            <div>
        </div>
        </div>)
}

export default UserListRender