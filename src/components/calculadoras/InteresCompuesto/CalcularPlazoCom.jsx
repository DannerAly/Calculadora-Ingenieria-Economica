import React, { useRef, useState } from "react";


function CalcularPlazoCom() {


    const [resultado, setResultado] = useState(null);


    const finalRef = useRef(null);
    const inicialRef = useRef(null);
    const iRef = useRef(null);
    
    function calcular() {
        const final = parseFloat(finalRef.current.value);
        const inicial = parseFloat(inicialRef.current.value);
        const i = parseFloat(iRef.current.value);

        if (isNaN(final) || isNaN(inicial) || isNaN(i)) {
            setResultado('Por favor, ingrese valores numéricos')
        } else {
           const interesPorcentual = i/100;
           // const interesCompuesto = principal*(Math.pow((1+interesPorcentual),n)-1);
           // const valorPrincipalCom =  final*Math.pow((1+interesPorcentual),-n) ;
           const plazo =  Math.log(final/inicial)/Math.log(1+interesPorcentual);


            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        Plazo "n" = {plazo.toFixed(2)} <br/>
                    </div>
                </div>
            )
        }
    }



    return (

        <>
            <div className="container">
                <h2> PLAZO </h2>
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
                            <p>$</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese la tasa de Interes: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="i" ref={iRef} /><br />
                            <p>%</p>
                        </div>
                    </div>
                   
                </div>

                <button onClick={calcular}>Calcular</button><br /><br />

                {resultado && <div> {resultado} </div>}
            </div>
        </>

    );
}

export default CalcularPlazoCom;