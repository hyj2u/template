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
        <h3>USDD Algorithmic stablecoin</h3>
        <div className="item lists">
            <div className="listCommon type2">
                <ul>   
                    <li>
                        <span>timestamp</span>
                        <span>2022-08-19</span>
                    </li>
                    <li>
                        <span>Total USDD</span>
                        <span>746,288,627 USD Collateral(209.88%)</span>
                    </li>
                    <li>
                        <span>Collaterals</span>
                        <span>BTC(39.21%) USDT(18.76%) USDC(135.54%) TRX(16.36%)</span>
                    </li>
                    <li>
                        <span>Trx Market cap / USDD</span>
                        <span>793%</span>
                    </li>
                    <li>
                        <span>Curve_TVL</span>
                        <span>USDD : 22,106,739USD (51%) 3POOL : 21, 201,963USD (49%)</span>
                    </li>
                    <li>
                        <span>Price</span>
                        <span>CurveFi(DEX) : 1.0028 HUOBI(CEX) : 0.9999</span>
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
        <h3>USDD Algorithmic stablecoin</h3>
        <div className="item">
            <Line options={options} data={data} />
        </div>

        <div className="h100"></div>

        <h3>USDD/ Collateral</h3>
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


function Tron() {
    const [tabType, settabType] = useState(1);

    return (
    <>
        <div className="content">
            <div className="contentInner">
                <h2>Tron</h2>
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

export default Tron;
