import React, { useRef, useState } from "react";


function CalcularTInteres() {


    const [resultado, setResultado] = useState(null);


    const finalRef = useRef(null);
    const inicialRef = useRef(null);
    const nRef = useRef(null);
    const periodoRef = useRef(null);

    function calcular() {
        const final = parseFloat(finalRef.current.value);
        const inicial = parseFloat(inicialRef.current.value);
        const n = parseFloat(nRef.current.value);
        const periodo = periodoRef.current.value;

        if (isNaN(final) || isNaN(inicial) || isNaN(n)) {
            setResultado('Por favor, ingrese valores numéricos')
        } else {
           // const interesPorcentual = i/100;
           // const interesCompuesto = principal*(Math.pow((1+interesPorcentual),n)-1);
           // const valorPrincipalCom =  final*Math.pow((1+interesPorcentual),-n) ;
           const tasaInteres =  Math.pow((final/inicial),(1/n))-1;


            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        Tasa de Interes = {tasaInteres.toFixed(2)} <br/>
                    </div>
                </div>
            )
        }
    }



    return (

        <>
            <div className="container">
                <h2> TASA DE INTERES </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el monto Inicial: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="principal" ref={inicialRef} /><br />
                            <p>$</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el monto Final: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="i" ref={finalRef} /><br />
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

export default CalcularTInteres;