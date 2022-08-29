import { useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
        display: true,
        text: 'Daily Global BTC Premium',
        },
    },
    scales: {
        y: {
        type: 'linear',
        display: true,
        position: 'left',
        },
        y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
            drawOnChartArea: false,
        },
        },
    },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Ukraine(UAH)',
            data: [0, 10, 5, 2, 20, 30, 45],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Russia(RUB)',
            data: [0, 10,10, 2, 20, 30, 45],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
        {
            label: 'Date',
            data: [0, 10,10, 2, 20, 30, 45],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};


/****************************************
 * Component
 ***************************************/
const AchillesComponent = () => {
    return (
    <>
        <h3>DAI Algorithmic stablecoin</h3>
        <div className="item lists">
            <div className="listCommon type2">
                <ul>   
                    <li>
                        <span>timestamp</span>
                        <span>2022-08-19</span>
                    </li>
                    <li>
                        <span>Total DAI</span>
                        <span>7,101,930,735 USD</span>
                    </li>
                    <li>
                        <span>Total Risky Debt (%)</span>
                        <span>14.3% (1,013,229,930 USD)</span>
                    </li>
                    <li>
                        <span>High Risky Debt (%)</span>
                        <span>0.2% (11,830,000 USD)</span>
                    </li>
                    <li>
                        <span>Mid Risky Debt (%)</span>
                        <span>3.7% (260,450,000 USD)</span>
                    </li>
                    <li>
                        <span>Low Risky Debt (%)</span>
                        <span>10.5% (742,270,000 USD)</span>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

const GrowthComponent = () => {
    return (
    <>
        <h3>DAI/USDC</h3>
        <div className="item">
            <Line options={options} data={data} />
        </div>

        <div className="h100"></div>

        <h3>DAI/ Risky Debt Type</h3>
        <div className="item">
            <Line options={options} data={data} />
        </div>
    </>
    )
}
/****************************************
 * // Component
 ***************************************/


function Ethereum() {
    const [tabType, settabType] = useState(1);

    return (
    <>
        <div className="content">
            <div className="contentInner">
                <h2>Ethereum</h2>
                <div className="items">
                    <div className="eachItem addTab">
                        <div className="tabBtn">
                            <button className={tabType == 1 ? 'active' : ''}
                                onClick={() => settabType(1)}
                            >Achilles tendon</button>
                            <button className={tabType == 2 ? 'active' : ''}
                                onClick={() => settabType(2)}
                            >Growth</button>
                        </div>
                        <div className="tabContent">
                            {tabType == 1 && <AchillesComponent />}
                            {tabType == 2 && <GrowthComponent />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Ethereum;
