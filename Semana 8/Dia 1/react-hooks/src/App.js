import React, { useState } from 'react'
import Botones from './Botones';

const App = () => {

let [contador, setContador] = useState(0);
console.log("Componentes App " + contador);

const saludar = () => {
  console.log("holis!");
}

  return (
    <div>
      Contador: {contador}
      <br />
      <br />
      <Botones setContador={setContador}
      contador = {contador} saludar={saludar}/>
    </div>
  )
}

export default App


