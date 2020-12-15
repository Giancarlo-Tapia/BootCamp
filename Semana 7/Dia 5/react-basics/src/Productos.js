import React from 'react'
import Producto from "./Producto";

const Productos = (prod) => {
    let lis = prod.productos.map((produ) => {
        return  (<Producto produ={produ}/>);
        })
        return (
            <div>
                <ul>
                {lis}
                </ul>
            </div>
        )
    }
export default Productos
