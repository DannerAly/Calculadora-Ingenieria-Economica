import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function Bars(props) {

    var limiteInicial = props.limitePrincipal;
    var limiteFinal = props.limiteFinal;
   
    var limiteInicialAjustado = limiteInicial; //aqui se puede agregar mas para que sea mas grande por ejemplo +10
    var limiteFinalAjustado = limiteFinal;  //aqui se puede agregar mas para que sea mas grande por ejemplo +10
   
    //redondeando los limites

    const limiteYMin = -Math.round(limiteFinalAjustado);
    const limiteYMax = Math.round(limiteInicialAjustado);

    const options = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                suggestedMin: limiteYMin < 0 ? limiteYMin : 0,
                suggestedMax: limiteYMax > 0 ? limiteYMax : 0,
            },
            x: {
                ticks: { color: 'rgba(0, 220, 195)' }
            }
        }
    };

    const data = {
        labels: props.meses,
        datasets: [
            {
                label: props.periodoCoef,
                data: props.beneficios,
                backgroundColor: '#37485f',
                
            }
        ]
    };

    return <Bar data={data} options={options} />;
}

export default Bars;