import React, { useState } from "react";
import CalcularVFinal from "../calculadoras/InteresSimple/CalcularVFinal";
import CalcularInteresSim from "../calculadoras/InteresSimple/CalcularInteresSim";

function InteresSimple() {
    const [variableSeleccionada, setVariableSeleccionada] = useState(null);

    const elegirVariable = (variable) => {
        switch(variable) {
            case "Final":
                setVariableSeleccionada(<div><CalcularVFinal/></div>);
                break;    
            case "interes":
                setVariableSeleccionada(<div><CalcularInteresSim/></div>);
                break;
            default:
                setVariableSeleccionada(null);
        }
    };

    return (
        <>
        <h1>INTERES SIMPLE</h1>
            <h2>Seleccione la variable que quiere encontrar:</h2> <br />
            <div className="BotonesVariables">
            <button onClick={() => elegirVariable("Final")}>Valor Final </button>
            <button onClick={() => elegirVariable("interes")}>Interes</button>
            </div>
            {variableSeleccionada &&
                <div>
                    <h3>Variable a calcular: {variableSeleccionada}</h3>
                </div>
            }
        </>
    );
}

export default InteresSimple;
