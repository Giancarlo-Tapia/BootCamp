import React from 'react'
import "./Usuario.css"

const Usuario = (props) => {
    return (
        <li className="list-usuario">
           {props.usu.nombre} 
        </li>
    )
}

export default Usuario
