import React, { useRef, useState } from "react";
import BarsChart1 from "../../graficos/BarsChart1";

function FinalA() {
    const [resultado, setResultado] = useState(null);
    const [diagrama, setDiagrama] = useState(null);

    const aRef = useRef(null);
    const iRef = useRef(null);
    const nRef = useRef(null);
    const periodoRef = useRef(null);

    function calcular() {
        const a = parseFloat(aRef.current.value);
        const i = parseFloat(iRef.current.value);
        const n = parseFloat(nRef.current.value);
        const periodo = periodoRef.current.value;

        if (isNaN(a) || isNaN(i) || isNaN(n)) {
            setResultado('Por favor, ingrese valores numéricos');
        } else {
            const interesPorcentual = i / 100;
            const factor = Math.pow((1 + interesPorcentual), n);
            const valorFinal = a * ((factor - 1) / interesPorcentual);

            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        F = {valorFinal.toFixed(2)} <br />
                    </div>
                </div>
            );

            imprimirDiagrama(a, valorFinal, n, periodo);
        }
    }

    function imprimirDiagrama(a, valorFinal, n, periodo) {
        const beneficios = [];
        for (let x = 0; x < n; x++) {
            beneficios.push(a);  // Valor de "A" para los periodos anteriores
        }
        beneficios.push(-valorFinal);  // Valor final

        const periodos = [];
        for (let j = 1; j <= n; j++) {
            periodos.push(`${j} ${periodo}`);
        }
        periodos.push(`Final ${periodo}`);

        setDiagrama(
            <>
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <BarsChart1 meses={periodos} beneficios={beneficios} />
            </>
        );
    }

    return (
        <>
            <div className="container">
                <h2> F/A </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="principal">Ingrese el monto de la Serie Uniforme "A": </label><br />
                        <div className="coeficiente">
                            <input type="number" id="principal" ref={aRef} /><br />
                            <p>$</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="i">Ingrese el valor del Interes: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="i" ref={iRef} /><br />
                            <p>%</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="n">Ingrese el periodo: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="n" ref={nRef} /><br />
                            <select name="periodo" id="periodo" ref={periodoRef}>
                                <option value="Dias">Días</option>
                                <option value="Meses">Meses</option>
                                <option value="Años">Años</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button onClick={calcular}>Calcular</button><br /><br />

                {resultado && <div> {resultado} </div>}
                {diagrama}
            </div>
        </>
    );
}

export default FinalA;
