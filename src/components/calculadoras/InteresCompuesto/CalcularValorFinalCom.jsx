import React, { useRef, useState } from "react";


function CalcularValorFinalCom() {


    const [resultado, setResultado] = useState(null);


    const principalRef = useRef(null);
    const iRef = useRef(null);
    const nRef = useRef(null);
    const periodoRef = useRef(null);

    function calcular() {
        const principal = parseFloat(principalRef.current.value);
        const i = parseFloat(iRef.current.value);
        const n = parseFloat(nRef.current.value);
        if (isNaN(principal) || isNaN(i) || isNaN(n)) {
            setResultado('Por favor, ingrese valores numéricos')
        } else {
            const interesPorcentual = i/100;
           // const interesCompuesto = principal*(Math.pow((1+interesPorcentual),n)-1);
            const valorFinalCom =  principal*Math.pow((1+interesPorcentual),n) ;


            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        Valor Final Compuesto: {valorFinalCom.toFixed(2)} <br/>
                    </div>
                </div>
            )
        }
    }



    return (

        <>
            <div className="container">
                <h2> VALOR FINAL </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el monto Inicial: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="principal" ref={principalRef} /><br />
                            <p>$</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el valor del Interes: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="i" ref={iRef} /><br />
                            <p>%</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el periodo: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="n" ref={nRef} /><br />
                            <select name="" id="" ref={periodoRef}>
                                <option value="Dias">Días</option>
                                <option value="Meses">Meses</option>
                                <option value="Años">Años</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button onClick={calcular}>Calcular</button><br /><br />

                {resultado && <div> {resultado} </div>}
            </div>
        </>

    );
}

export default CalcularValorFinalCom;