
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




function MarketMonitoring() {

    return (
    <>
        <div className="content">
            <div className="contentInner">
            <h2>Market Monitoring</h2>
            <div className="items item4">
                <div className="eachItem">
                    <h3>Daliy Global BTC Premium</h3>
                    <div className="item">
                        <Line options={options} data={data} />
                    </div>
                </div>
                <div className="eachItem">
                    <h3>Funding Rates (Binance coin-M)</h3>
                    <div className="item tables">
                        <div className="tableCommon">
                            <table>
                                <caption>Best 5</caption>
                                <tbody>
                                    <tr>
                                        <th>UNI/USD</th>
                                        <th>2.00bp</th>
                                    </tr>
                                    <tr>
                                        <td>ROSE/USD</td>
                                        <td>1.50bp</td>
                                    </tr>
                                    <tr>
                                        <td>ALGO/USD</td>
                                        <td>1.20bp</td>
                                    </tr>
                                    <tr>
                                        <td>XTZ/USD</td>
                                        <td>1.10bp</td>
                                    </tr>
                                    <tr>
                                        <td>ATOM/USD</td>
                                        <td>1.00bp</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tableCommon">
                            <table>
                                <caption>Worst 5</caption>
                                <tbody>
                                    <tr>
                                        <th>GMT/USD</th>
                                        <th>-8.00bp</th>
                                    </tr>
                                    <tr>
                                        <td>TRX/USD</td>
                                        <td>-7.00bp</td>
                                    </tr>
                                    <tr>
                                        <td>SOL/USD</td>
                                        <td>-6.00bp</td>
                                    </tr>
                                    <tr>
                                        <td>ETH/USD</td>
                                        <td>-4.00bp</td>
                                    </tr>
                                    <tr>
                                        <td>ATOM/USD</td>
                                        <td>-2.00bp</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="eachItem">
                    <h3>BTC Forecasting in 24H(by neuralprophet)</h3>
                    <div className="item lists">
                        <div className="listCommon">
                            <h4>Base</h4>
                            <ul>   
                                <li>&#183; 2022-08-20 09:00</li>
                                <li>&#183; BTC : 20800</li>
                            </ul>
                        </div>
                        <div className="listCommon">
                            <h4>Forecasting</h4>
                            <ul>   
                                <li>&#183; 2022-08-20 09:00</li>
                                <li>&#183; BTC : 20400
                                    <span className="c_blue">(-2%)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="eachItem">
                    <h3>Economic Calendar today</h3>
                    <div className="item">
                        <div className="tableCommon over">
                            <table>
                                <caption>Worst 5</caption>
                                <colgroup>
                                    <col style={{width:''}} />
                                    <col style={{width:''}} />
                                    <col style={{width:'73px'}} />
                                    <col style={{width:'73px'}} />
                                    <col style={{width:'73px'}} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>event</th>
                                        <th>actual</th>
                                        <th>forcecast</th>
                                        <th>previous</th>
                                    </tr>
                                    <tr>
                                        <td>2022-08-20 02:00(Sat)</td>
                                        <td>U.S. Baker Hughes Oil Rig Count</td>
                                        <td>601</td>
                                        <td>&#60;NA&#62;</td>
                                        <td>601</td>
                                    </tr>
                                    <tr>
                                        <td>2022-08-20 02:00(Sat)</td>
                                        <td>U.S. Baker Hughes Oil Rig Count</td>
                                        <td>601</td>
                                        <td>&#60;NA&#62;</td>
                                        <td>601</td>
                                    </tr>
                                    <tr>
                                        <td>2022-08-20 02:00(Sat)</td>
                                        <td>U.S. Baker Hughes Oil Rig Count</td>
                                        <td>601</td>
                                        <td>&#60;NA&#62;</td>
                                        <td>601</td>
                                    </tr>
                                    <tr>
                                        <td>2022-08-20 02:00(Sat)</td>
                                        <td>U.S. Baker Hughes Oil Rig Count</td>
                                        <td>601</td>
                                        <td>&#60;NA&#62;</td>
                                        <td>601</td>
                                    </tr>
                                    <tr>
                                        <td>2022-08-20 02:00(Sat)</td>
                                        <td>U.S. Baker Hughes Oil Rig Count</td>
                                        <td>601</td>
                                        <td>&#60;NA&#62;</td>
                                        <td>601</td>
                                    </tr>
                                    <tr>
                                        <td>2022-08-20 02:00(Sat)</td>
                                        <td>U.S. Baker Hughes Oil Rig Count</td>
                                        <td>601</td>
                                        <td>&#60;NA&#62;</td>
                                        <td>601</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
    );
}

export default MarketMonitoring;
