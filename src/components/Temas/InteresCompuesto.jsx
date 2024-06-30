import React, { useState } from "react";
//import CalcularVFinal from "../calculadoras/InteresSimple/CalcularVFinal";
//import CalcularInteresSim from "../calculadoras/InteresSimple/CalcularInteresSim";
import CalcularInteresCom from "../calculadoras/InteresCompuesto/CalcularInteresCom";
import CalcularValorFinalCom from "../calculadoras/InteresCompuesto/CalcularValorFinalCom";
import CalcularInteresC from "../calculadoras/InteresCompuesto/CalcularInteresC";
import CalcularValorInicialCom from "../calculadoras/InteresCompuesto/CalcularValorInicialCom";
import CalcularTInteres from "../calculadoras/InteresCompuesto/CalcularTInteres";
import CalcularPlazoCom from "../calculadoras/InteresCompuesto/CalcularPlazoCom";

function InteresCompuesto() {
    const [variableSeleccionada, setVariableSeleccionada] = useState(null);

    const elegirVariable = (variable) => {
        switch(variable) {
            case "interesCompuesto":
                setVariableSeleccionada(<div><CalcularInteresCom/></div>);
                break;
            case "interes":
                setVariableSeleccionada(<div><CalcularInteresC/></div>);
                break; 
            case "finalCom":
                setVariableSeleccionada(<div><CalcularValorFinalCom/></div>);
                break;    
            case "valorInicial":
                setVariableSeleccionada(<div><CalcularValorInicialCom/></div>);
                break;
            case "tasaInteres":
                setVariableSeleccionada(<div><CalcularTInteres/></div>);
                break;
            case "plazo":
                setVariableSeleccionada(<div><CalcularPlazoCom/></div>);
                break;
            default:
                setVariableSeleccionada(null);
        }
    };

    return (
        <>
         <h1>INTERES COMPUESTO</h1>
            <h2>Seleccione la variable que quiere encontrar:</h2> <br />
            <div className="BotonesVariables">
            <button onClick={() => elegirVariable("interesCompuesto")}>Interes Compuesto </button>
            <button onClick={() => elegirVariable("interes")}>Interes </button>
            <button onClick={() => elegirVariable("finalCom")}>Valor Final</button>
            <button onClick={() => elegirVariable("valorInicial")}>Valor Inicial</button>
            <button onClick={() => elegirVariable("tasaInteres")}>Tasa de Interes</button>
            <button onClick={() => elegirVariable("plazo")}>Plazo</button>
            </div>
            {variableSeleccionada &&
                <div>
                    <h3>Variable a calcular: {variableSeleccionada}</h3>
                </div>
            }
        </>
    );
}

export default InteresCompuesto;
