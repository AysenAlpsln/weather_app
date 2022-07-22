import React from 'react'
import rainy from './rainy-weather.jpg'

const Days = () => {
  return (
    <div className='days'>
      <div className='day_container'>
        <div className='name'>
          <p>Wed</p>
        </div>
        <div className='picture'>
          <img src={rainy} alt="rainy" height={70}/>
        </div>
        <div className='degrees'>
          <p className='top'>78&#176;</p>
          <p className='down'>67&#176;</p>
        </div>
      </div>
      <div className='day_container'>
        <div className='name'>
          <p>Wed</p>
        </div>
        <div className='picture'>
          <img src={rainy} alt="rainy" height={70}/>
        </div>
        <div className='degrees'>
          <p className='top'>78&#176;</p>
          <p className='down'>67&#176;</p>
        </div>
      </div>
      <div className='day_container'>
        <div className='name'>
          <p>Wed</p>
        </div>
        <div className='picture'>
          <img src={rainy} alt="rainy" height={70}/>
        </div>
        <div className='degrees'>
          <p className='top'>78&#176;</p>
          <p className='down'>67&#176;</p>
        </div>
      </div>
    </div>
  )
}

export default Days