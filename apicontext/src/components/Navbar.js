    import React from 'react'
    import "./Navbar.css"
    import {Link, NavLink} from "react-router-dom"
    
    const Navbar = () => {
    return (
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Produtos</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
    }

    export default Navbar