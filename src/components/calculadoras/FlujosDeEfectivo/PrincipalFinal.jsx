import React, { useRef, useState } from "react";
import BarsChart1 from "../../graficos/BarsChart1";

function PrincipalFinal() {
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
            const interesPorcentual = i / 100;
            const valorPrincipalCom = final / (Math.pow((1 + interesPorcentual), n));

            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        P = {valorPrincipalCom.toFixed(2)} <br />
                    </div>
                </div>
            );

            imprimirDiagrama(valorPrincipalCom, final, i, n, periodo);
        }
    }

    function imprimirDiagrama(valorPrincipalCom, final, i, n, periodo) {
        const beneficios = [];
        const interesSoloUnPeriodo = valorPrincipalCom * (i / 100);
        for (let x = 0; x <= n; x++) {
            if (x === 0) {
                beneficios.push(valorPrincipalCom);
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
                <BarsChart1 meses={meses} beneficios={beneficios} limiteFinal={final} limitePrincipal={valorPrincipalCom} />
            </>
        );
    }

    return (
        <>
            <div className="container">
                <h2> P/F </h2>
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

export default PrincipalFinal;
