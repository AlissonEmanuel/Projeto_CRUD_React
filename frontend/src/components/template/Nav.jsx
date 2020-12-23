import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refator depois */}
            <Link to="/">
                <i className="fa fa-home">Inicio</i>
            </Link>
            <Link to="/users">
                <i className="fa fa-users">Usuários</i>
            </Link>
        </nav>
    </aside>