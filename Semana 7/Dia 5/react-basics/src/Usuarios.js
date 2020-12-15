import React from 'react'
import Usuario from "./Usuario";

const Usuarios = (props) => {


    let lis = props.users.map((usu) => {
    return  (<Usuario usu={usu}/>);
    })
    return (
        <div>
            <ul>
            {lis}
            </ul>
        </div>
    )
}

export default Usuarios
