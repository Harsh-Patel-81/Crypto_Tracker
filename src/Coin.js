import React from 'react'
import './Coin.css';

function Coin({name,image,price,volume,symbol,priceChange,marketcap}) {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'><span>&#8377;</span>{price}</p>
                <p className='coin-volume'><span>&#8377;</span>{volume.toLocaleString()}</p>
                {priceChange<0?(
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ):(
                    <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>Mkt cap:<span>&#8377;</span>{marketcap.toLocaleString()}</p>
            </div>

        </div>
    </div>
  )
}

export default Coin