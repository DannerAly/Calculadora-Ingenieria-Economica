import React, { useRef, useState } from "react";
import BarsChart1 from "../../graficos/BarsChart1";

function APrincipal() {
    const [resultado, setResultado] = useState(null);
    const [diagrama, setDiagrama] = useState(null);

    const principalRef = useRef(null);
    const iRef = useRef(null);
    const nRef = useRef(null);
    const periodoRef = useRef(null);

    function calcular() {
        const principal = parseFloat(principalRef.current.value);
        const i = parseFloat(iRef.current.value);
        const n = parseFloat(nRef.current.value);
        const periodo = periodoRef.current.value;

        if (isNaN(principal) || isNaN(i) || isNaN(n)) {
            setResultado('Por favor, ingrese valores numéricos');
        } else {
            const ix = i / 100;
            const factor = Math.pow((1 + ix), n);
            const valorA = principal * ((ix * factor) / (factor - 1));

            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        A = {valorA.toFixed(2)} <br />
                    </div>
                </div>
            );

            imprimirDiagrama(principal, valorA, n, periodo);
        }
    }

    function imprimirDiagrama(principal, valorA, n, periodo) {
        const beneficios = [principal];  // Valor principal al inicio
        for (let x = 1; x <= n; x++) {
            beneficios.push(-valorA);  // Valor de "A" para los siguientes periodos
        }

        const periodos = [];
        for (let j = 0; j <= n; j++) {
            periodos.push(`${j} ${periodo}`);
        }

        setDiagrama(
            <>
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <BarsChart1 meses={periodos} beneficios={beneficios} limitePrincipal={principal} />
            </>
        );
    }

    return (
        <>
            <div className="container">
                <h2> A/P </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="principal">Ingrese el monto del Valor Inicial: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="principal" ref={principalRef} /><br />
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

export default APrincipal;
