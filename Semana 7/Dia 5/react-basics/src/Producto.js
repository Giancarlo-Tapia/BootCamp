import React from 'react'

const Producto = (prod) => {
    return (
        <li>
           <p>id : {prod.produ.id}</p>
           <p>Descripción : {prod.produ.descripcion}</p>
           <p>Precio : S/{prod.produ.precio}</p>
        </li>
    )
}

export default Producto
    