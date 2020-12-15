import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Usuarios from "./Usuarios"
import Productos from "./Productos"
const App = () => {

  const miTitulo = "El Título de mi aplicación";
  const libros = ["Hamlet", "Seguera", "Ensayo sobre la Ceguera"];
  let librosLis = libros.map (libro => {
  return (<li >  {libro}</li>)
  }); 
  const users = [
    { id: 1, nombre: "José", apellido: "Montoya" },
    { id: 37, nombre: "Martín", apellido: "Urruti" },
    { id: 66, nombre: "Julissa", apellido: "Cames" }
  ];

  const productos = [
    { id: 34, descripcion: "Play Station 5", precio: 3000.50 },
    { id: 453, descripcion: "Cámara Nikon D5600", precio: 4000 },
    { id: 78, descripcion: "Olla Arrocera", precio: 150.00 }
  ]

  return (
    <>
    <Header />
    <h1 style={ 
      { color:"#444444", 
        textAlign: "center" 
      } }>
      { miTitulo }
    </h1>
    <div>
      Hola Mundo
      <p>
        lorem 
      </p>
      <ul>
        {librosLis}
      </ul>
      <section>
        <Usuarios users={users}
        miTitulo = {miTitulo}/>
      </section>
    </div>
    <hr/>
    <h2>Productos</h2>
    <Productos productos={productos}/>

    <Footer />
    </>
  )
}

export default App