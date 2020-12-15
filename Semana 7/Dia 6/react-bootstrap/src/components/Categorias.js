import React from 'react'
import { generos } from "./../data/Data";

const Categorias = ( props ) => {


let catsNombres = props.cats.map ( cat_id => {
        let objGenero = generos.find( (gen) => {
            if (+gen.id === +cat_id){
                return gen;
            }
        })
        return objGenero.name;
    })

    return (
        <p className="card-text">
           {
           catsNombres.map ( cat => {
            return (<span className="badge badge-danger mr-1" key={cat}>
                {cat}
            </span>)
           })
           } 
        </p>
    )
}

export default Categorias
