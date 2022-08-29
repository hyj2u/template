
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
import { useState } from 'react';
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
const OverviewComponent = () => {
    return (
    <>
        <h3>Daliy Global BTC Premium</h3>
        <div className="item">
            <Line options={options} data={data} />
        </div>
    </>
    )
}

const OnchainComponent = () => {
    return (
    <>
        <h3>Onchain PnL Score : 83/100(+2)</h3>
        <div className="item">
            <div className="tableCommon">
                <table>
                    <tbody>
                        <tr>
                            <th>Sub_Score</th>
                            <th>Index</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>80/100</td>
                            <td>MVRV</td>
                            <td>0.96(-0.01)</td>
                        </tr>
                        <tr>
                            <td>60/100</td>
                            <td>SOPR_Ratio</td>
                            <td>0.58(+0.01)</td>
                        </tr>
                        <tr>
                            <td>30/100</td>
                            <td>Puell_Multiple</td>
                            <td>0.56(+0.05)</td>
                        </tr>
                        <tr>
                            <td>80/100</td>
                            <td>Utxo in Profit(%)</td>
                            <td>72.25(+1.5)</td>
                        </tr>
                        <tr>
                            <td>70/100</td>
                            <td>Mining_density</td>
                            <td>10.20(+1.1)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

const MarketComponent = () => {
    return (
    <>
        <h3>Market_Derivatives_Score: 60/100(+5)</h3>
        <div className="item">
            <div className="tableCommon">
                <table>
                    <tbody>
                        <tr>
                            <th>Sub_Score</th>
                            <th>Index</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>90/100</td>
                            <td>Open Interest RSI(14d)</td>
                            <td>39.95(+2)</td>
                        </tr>
                        <tr>
                            <td>60/100</td>
                            <td>Funding Rates(PERP,8H)</td>
                            <td>-0.8bp(+1.0bp)</td>
                        </tr>
                        <tr>
                            <td>30/100</td>
                            <td>DVOL_EOD</td>
                            <td>80.30%(+1.2%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}
const WhaleComponent = () => {
    return (
    <>
        <h3>Whale Score: 20/100(-5)</h3>
        <div className="item">
            <div className="tableCommon">
                <table>
                    <tbody>
                        <tr>
                            <th>Sub_Score</th>
                            <th>Index</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>90/100</td>
                            <td>7y_10y_Spent Output(%)</td>
                            <td>0.01%(-3.2%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}
/****************************************
 * // Component
 ***************************************/


function BitCoin() {
    const [tabType, settabType] = useState(1);

    return (
    <>
        <div className="content">
            <div className="contentInner">
                <h2>Bitcoin</h2>
                <div className="items">
                    <div className="eachItem addTab">
                        <div className="tabBtn">
                            <button className={tabType == 1 ? 'active' : ''}
                                onClick={() => settabType(1)}
                            >Overview</button>
                            <button className={tabType == 2 ? 'active' : ''}
                                onClick={() => settabType(2)}
                            >Onchain PnL Score</button>
                            <button className={tabType == 3 ? 'active' : ''}
                                onClick={() => settabType(3)}
                            >Market Derivatives Score</button>
                            <button className={tabType == 4 ? 'active' : ''}
                                onClick={() => settabType(4)}
                            >Whale Score</button>
                        </div>
                        <div className="tabContent">
                            {tabType == 1 && <OverviewComponent />}
                            {tabType == 2 && <OnchainComponent />}
                            {tabType == 3 && <MarketComponent />}
                            {tabType == 4 && <WhaleComponent />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default BitCoin;
