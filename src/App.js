import './App.css';
import Boton from './componentes/boton';
import Saludo from './componentes/saludo';
import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Saludo saludo='Ingresa una palabra' />
          <input
            type="text"
            value={mensaje}
            placeholder="Ingresa una palabra"
            onChange={e => setMensaje(e.target.value)} />

          <p>
            <strong>{mensaje}</strong>
          </p>
        </div>

        <Boton mensaje={mensaje} />

      </header>
    </div>
  );
}

export default App;
