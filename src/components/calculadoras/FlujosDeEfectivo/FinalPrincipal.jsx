import React, { useRef, useState } from "react";
import BarsChart1 from "../../graficos/BarsChart1";

function FinalPrincipal() {
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
            const interesPorcentual = i / 100;
            const factor = Math.pow((1 + interesPorcentual), n);
            const final = principal * factor;

            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        F = {final.toFixed(2)} <br />
                    </div>
                </div>
            );

            imprimirDiagrama(principal, i, n, final, periodo);
        }
    }

    function imprimirDiagrama(principal, i, n, final, periodo) {
        const beneficios = [];
        const interesSoloUnPeriodo = principal * (i / 100);
        for (let x = 0; x <= n; x++) {
            if (x === 0) {
                beneficios.push(principal);
            } else if (x !== n) {
                beneficios.push(parseFloat(`-${interesSoloUnPeriodo}`));
            } else {
                beneficios.push(parseFloat(`-${final}`));
            }
        }

        const meses = [];
        for (let j = 0; j <= n; j++) {
            meses.push(`${j} ${periodo}`);
        }

        setDiagrama(
            <>
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <BarsChart1 meses={meses} beneficios={beneficios} limiteFinal={final} limitePrincipal={principal} />
            </>
        );
    }

    return (
        <>
            <div className="container">
                <h2> F/P </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="principal">Ingrese el monto Inicial: </label><br />
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

export default FinalPrincipal;
