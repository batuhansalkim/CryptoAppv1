import React from 'react'
import CoinItem from './CoinItem'

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
                            <CoinItem coins={coins}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Coins