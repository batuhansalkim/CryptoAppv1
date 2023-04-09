import React from 'react'
import CoinItem from './CoinItem'
import "../components/Coins.css";
import {Link} from "react-router-dom";
import Coin from '../routes/Coin';
import deneme from '../routes/deneme';
const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>
                {/* {props.coins.map(coins => {
                    return (
                        <CoinItem coins={coins}/>
                    )
                })} */}
                {
                    props.coins.map(coins=>{
                        return(
                           <Link to={`/coin/${coins.id}`} element={<deneme/>} key={coins.id}>
                            <CoinItem coins={coins}/>
                           </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Coins