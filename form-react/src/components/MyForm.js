import React, { useState } from "react";
import "./MyForm.css"
const MyForm = ({user}) => {
    const [name, setName] = useState(user? user.name: '')
    const [email, setEmail] = useState(user? user.email: '')
    const [bio, setBio] = useState(user? user.bio: '')
    const [role, setRole] = useState(user? user.role: '')

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name, 'name')
    }


    const handleSubmit = (event)=> {
    event.preventDefault();
    console.log("enviando form")
    console.log(name, email, bio, role)
    setName("");
    setEmail("")
    setBio("")
    setRole("")}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="myform">
                    <label htmlFor="name">Nome: </label>
                    <input value={name} type="text" name="name" placeholder="Digite seu Nome" onChange={handleChange}/>
                </div>
            <div className="myform">
            <label>
                <span>E-mail: </span>
                <input type="email" value={email} name="email" placeholder="Digite seu Email" onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            </div>
            <div><label><span>Bio:</span><textarea placeholder="Digite aqui" name="Bio" id="" cols="30" rows="10" value={bio} onChange={((e)=> setBio(e.target.value))}></textarea></label>
            <div><label><span>Função no sistema</span>
            <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                <option value="user">User</option> 
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            </label></div>
            <input type="submit" value="Enviar"/></div>
            </form>
        </div>
        )}

export default MyForm