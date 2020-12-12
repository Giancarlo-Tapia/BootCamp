import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

const App = () => {

  const miTitulo = "El Título de mi aplicación";
  const libros = ["Hamlet", "Seguera", "Ensayo sobre la Ceguera"];
  let librosLis = libros.map (libro => {
    return <li>{libro}</li>
  }); 


  return (
    <>
    <Header />
    <h1>
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
    </div>
    <Footer />
    </>
  )
}

export default App