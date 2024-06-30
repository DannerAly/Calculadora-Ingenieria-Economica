import React, { useState } from "react";
//import CalcularVFinal from "../calculadoras/InteresSimple/CalcularVFinal";
//import CalcularInteresSim from "../calculadoras/InteresSimple/CalcularInteresSim";
//import CalcularInteresCom from "../calculadoras/InteresCompuesto/CalcularInteresCom";
import CalcularValorFinalCom from "../calculadoras/InteresCompuesto/CalcularValorFinalCom";
//import CalcularInteresC from "../calculadoras/InteresCompuesto/CalcularInteresC";
import CalcularValorInicialCom from "../calculadoras/InteresCompuesto/CalcularValorInicialCom";
import CalcularTInteres from "../calculadoras/InteresCompuesto/CalcularTInteres";
import CalcularPlazoCom from "../calculadoras/InteresCompuesto/CalcularPlazoCom";
import FinalPrincipal from "../calculadoras/FlujosDeEfectivo/FinalPrincipal";
import PrincipalFinal from "../calculadoras/FlujosDeEfectivo/PrincipalFinal";
import PrincipalA from "../calculadoras/FlujosDeEfectivo/PrincipalA";
import APrincipal from "../calculadoras/FlujosDeEfectivo/APrincipal";
import FinalA from "../calculadoras/FlujosDeEfectivo/FinalA";
import AFinal from "../calculadoras/FlujosDeEfectivo/AFinal";

function FlujosDeEfectivo() {
    const [variableSeleccionada, setVariableSeleccionada] = useState(null);

    const elegirVariable = (variable) => {
        switch (variable) {
            case 1:
                setVariableSeleccionada(<div><FinalPrincipal /></div>);
                break;
            case 2:
                setVariableSeleccionada(<div><PrincipalFinal /></div>);
                break;
            case 3:
                setVariableSeleccionada(<div><PrincipalA /></div>);
                break;
            case 4:
                setVariableSeleccionada(<div><APrincipal /></div>);
                break;
            case 5:
                setVariableSeleccionada(<div><FinalA /></div>);
                break;
            case 6:
                setVariableSeleccionada(<div><AFinal /></div>);
                break;
            default:
                setVariableSeleccionada(null);
        }
    };

    return (
        <>
            <h1>FLUJOS DE EFECTIVO</h1>
            <h2>Seleccione la variable que quiere encontrar:</h2> 
            <h2>Encontrar / Dado</h2>
            <h3>Series Uniformes:</h3>
            <div className="BotonesVariables">
                
                <button onClick={() => elegirVariable(1)}>F/P </button>
                <button onClick={() => elegirVariable(2)}>P/F </button>

            </div>
            <h3>Series Uniformes:</h3> <br />
            <div className="BotonesVariables">
                <button onClick={() => elegirVariable(3)}>P/A</button>
                <button onClick={() => elegirVariable(4)}>A/P</button>
                <button onClick={() => elegirVariable(5)}>F/A</button>
                <button onClick={() => elegirVariable(6)}>A/F</button>
            </div>
            {variableSeleccionada &&
                <div>
                    <h3>Variable a calcular: {variableSeleccionada}</h3>
                </div>
            }
        </>
    );
}

export default FlujosDeEfectivo;
