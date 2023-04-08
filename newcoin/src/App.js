import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';

function App() {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
  useEffect(()=>{
    axios.get(url).then(res=>setCoins(res.data)).catch((error)=>{console.log(error);})
  },[])
  return (
    < >

    <Coins coins={coins}/>
    </>
  );
}

export default App;
