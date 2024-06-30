import React from "react";
import './styles/tablaInteresSimple.css';
import BarsChart from '../graficos/BarsChart';
function TablaInteresSimple(props) {

    const { principal, n, interesPeriodico, final, i, periodo } = props;

    function imprimirFilas() {

        let filas = [];
        for (let j = 0; j <= n; j++) {
            let principalTabla = j === 0 ? principal : '----';
            let interesTabla = j === 0 ? '----' : `${i} %`;
            let deudaTabla = j === 0 ? principal.toFixed(2) : (principal + interesPeriodico * j).toFixed(2);
            let finalTabla = j === n ? final.toFixed(2) : '----';
            filas.push(
                <tr key={j}>
                    <td>{j}</td>
                    <td>{principalTabla}</td>
                    <td>{interesTabla}</td>
                    <td>{deudaTabla}</td>
                    <td>{finalTabla}</td>
                </tr>
            )
        }

        return filas;
    }

    function imprimirDiagrama() {
        var beneficios = [];
        var interesSoloUnPeriodo = principal * (i / 100);
        for (var x = 0; x <= n; x++) {
            if (x === 0) {
                beneficios.push(principal)
            } else if (x !== n) {
                beneficios.push(parseFloat(`-${interesSoloUnPeriodo}`))
            } else {
                beneficios.push(parseFloat(`-${final}`))
            }
        }
        var meses = [];
        for (var j = 0; j <= n; j++) {
            meses.push(`${j} ${periodo}`)
        }

        return (
            <>
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <BarsChart meses={meses} beneficios={beneficios} limiteFinal={final} limitePrincipal={principal} />
            </>
        )
    }
  

    return (

        <>
          
            <h3>TABLA INTERES SIMPLE</h3>
            <div className={`table-container fadeInAnimation`}>
                <table>
                    <thead>
                        <tr>
                            <th>{periodo}</th>
                            <th>Prestamo $</th>
                            <th>Interes %</th>
                            <th>Deuda $</th>
                            <th>Suma Total $</th>
                        </tr>
                    </thead>
                    <tbody>
                        {imprimirFilas()}
                    </tbody>
                </table>
            </div>
            <div className="diagrama fadeInAnimation">
                {imprimirDiagrama()}
            </div>
        </>

    );
}

export default TablaInteresSimple;