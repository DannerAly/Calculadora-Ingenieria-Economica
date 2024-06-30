import React, { useRef, useState } from "react";


function CalcularInteresC() {


    const [resultado, setResultado] = useState(null);


    const principalRef = useRef(null);
    const finalRef = useRef(null);
   
    

    function calcular() {
        const principal = parseFloat(principalRef.current.value);
        const final = parseFloat(finalRef.current.value);
      

        if (isNaN(principal) || isNaN(final)) {
            setResultado('Por favor, ingrese valores numéricos')
        } else {
           
            const interes = final-principal; 

            setResultado(
                <div className="resultado">
                    <div className="valorFinal2">
                        <div>RESULTADO:</div>
                        Interes = {interes.toFixed(2)} <br/>
                    </div>
                </div>
            )
        }
    }



    return (

        <>
            <div className="container">
                <h2> INTERES </h2>
                <div className="CalcularVFinal">
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el monto Inicial: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="principal" ref={principalRef} /><br />
                            <p>$</p>
                        </div>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="">Ingrese el Monto Final: </label><br />
                        <div className="coeficiente">
                            <input type="number" id="final" ref={finalRef} /><br />
                            <p>$</p>
                        </div>
                    </div>
                </div>

                <button onClick={calcular}>Calcular</button><br /><br />

                {resultado && <div> {resultado} </div>}
            </div>
        </>

    );
}

export default CalcularInteresC;