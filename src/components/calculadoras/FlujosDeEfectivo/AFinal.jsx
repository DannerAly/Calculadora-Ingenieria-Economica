import React, { useRef, useState } from "react";
import BarsChart1 from "../../graficos/BarsChart1";

function AFinal() {
    const [resultado, setResultado] = useState(null);
    const [diagrama, setDiagrama] = useState(null);

    const finalRef = useRef(null);
    const iRef = useRef(null);
    const nRef = useRef(null);
    const periodoRef = useRef(null);

    function calcular() {
        const final = parseFloat(finalRef.current.value);
        const i = parseFloat(iRef.current.value);
        const n = parseFloat(nRef.current.value);
        const periodo = periodoRef.current.value;

        if (isNaN(final) || isNaN(i) || isNaN(n)) {
            setResultado('Por favor, ingrese valores numéricos');
        } else {
            const ix = i / 100;
            const factor = Math.pow((1 + ix), n);
            const serieA = final * (ix / (factor - 1));

            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        A = {serieA.toFixed(2)} <br/>
                     </div>
                </div>
            );

            imprimirDiagrama(serieA, n, periodo, final);
        }
    }

    function imprimirDiagrama(serieA, n, periodo, final) {
        const beneficios = [];
        const periodos = [];

        for (let x = 1; x <= n; x++) {
            beneficios.push(-serieA); // Serie uniforme "A" para los periodos (negativos)
            periodos.push(`${x} ${periodo}`); // Periodos
        }

        // Agregamos el monto final al final del gráfico
        beneficios.push(final);
        periodos.push(`${n + 1} ${periodo}`);

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
                <h2> A/F </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="final">Ingrese el monto Final: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="final" ref={finalRef} /><br />
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

export default AFinal;
