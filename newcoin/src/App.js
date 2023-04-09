import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Routes,Route} from "react-router-dom";
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Coin from './routes/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
  useEffect(()=>{
    axios.get(url).then(res=>setCoins(res.data)).catch((error)=>{console.log(error);})
  },[])
  return (
    < >
    <Navbar/>
    <Routes>
        <Route path='/' element={<Coins coins={coins} />}></Route>
        <Route path='/coin' element={<Coin/>}/>
        <Route/>
        <Route path=':coinId' element={<Coin/>}/>
    </Routes>
    
    </>
  );
}

export default App;
