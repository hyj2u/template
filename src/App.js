import './css/App.css';
import MarketMonitoring from './content/MarketMonitoring';
import BitCoin from './content/BitCoin';
import Ethereum from './content/Ethereum';
import Tron from './content/Tron';
import Header from './include/Header';
import { useState } from 'react';

function App() {
  const [viewType, setviewType] = useState('market');

  return (
    <div className="App">
      <Header viewType={viewType} setviewType={setviewType} />

      {viewType == 'market' &&  <MarketMonitoring />}
      {viewType == 'bitcoin' &&  <BitCoin />}
      {viewType == 'ethereum' &&  <Ethereum />}
      {viewType == 'tron' &&  <Tron />}
    </div>
  );
}

export default App;
