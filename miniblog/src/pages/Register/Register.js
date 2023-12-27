import React from 'react'
import styles from "./Register.module.css"
import {useState, useEffect} from "react"

const Register = () => {
  return (
    <div >
    <h2>
   Cadastre-se para postar
   </h2>
   <form>
    <label>
        <span>Nome:</span>
        <input type="text" name="displayName" required placeholder="Nome do usuário"/></label>
        <label>
        <span>Email:</span>
        <input type="email" name="email" required placeholder="Email do usuário"/></label>
        <label>
        <span>Senha:</span>
        <input type="password" name="password" required placeholder="Insira sua Password"/></label> <label>
        <span>Confirmação de senha:</span>
        <input type="password" name="Confirmpassword" required placeholder="Confirme sua Password"/></label>
        <button className='btn'>Cadastrar</button>
        </form></div>
  )
}

export default Register