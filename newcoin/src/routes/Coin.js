import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Coin = () => {
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  return (
    <div>
        <h1>baty</h1>
    </div>
  )
}

export default Coin;