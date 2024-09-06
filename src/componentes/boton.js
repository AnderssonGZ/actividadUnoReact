//import { useState } from "react";

import { useState } from "react";
import { esPalabraCapicua } from "../analisis";


function Boton({ mensaje }) {
    const [mostrarEsCapicua, setMostrarEsCapicua] = useState(false);
    const [mostrarNoEsCapicua, setMostrarNoEsCapicua] = useState(false);
    const analizarPalabra = () => {
        if (esPalabraCapicua(mensaje)) {
            setMostrarEsCapicua(true);
            setMostrarNoEsCapicua(false);
        } else {
            setMostrarNoEsCapicua(true);
            setMostrarEsCapicua(false);
        }
    }

    return (
        <div>
            <button onClick={analizarPalabra}> Analizar</button>
            {mostrarEsCapicua && <h3>Es capicua</h3>}
            {mostrarNoEsCapicua && <h3>No es capicua</h3>}

        </div>

    )

}

export default Boton;