import React, { useState } from "react";
import "./MyForm.css"
const MyForm = ({user}) => {
    //3 - gerenciamento de dados
    const [name, setName] = useState(user? user.name: '')
    const [email, setEmail] = useState(user? user.email: '')

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name, 'name')
    }


    const handleSubmit = (event)=> {
    event.preventDefault();
    console.log("enviando form" , name, email)}

    console.log(email)

    return(
        <div>
            {/* 1- criação de form */}
            <fom onSubmit={handleSubmit}>
                <div className="myform">
                    <label htmlFor="name">Nome: </label>
                    <input value={name} type="text" name="name" placeholder="Digite seu Nome" onChange={handleChange}/>
                    <input id="ipt-submit" type="submit" value="Enviar"  />
                </div>
            {/* 1- label envolvendo input */}
            <div className="myform">
            <label>
                <span>E-mail: </span>
                <input type="email" value={email} name="email" placeholder="Digite seu Email" onChange={(e)=> setEmail(e.target.value)}/>
            </label>
                <input type="submit" value="Enviar"/>
            </div>
            </fom>
        </div>
        )}

export default MyForm