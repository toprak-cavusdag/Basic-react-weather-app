import React, { useState } from 'react'

const City = ({city}) => {
    
    
  return (
    <div>
      <div className='text-gray-500 text-center'>
            <h1>Şehir: <b>{city.name}</b> </h1>
            <h1>derece: <b>{city.main.temp}</b></h1>
            <h1>hissedilen sıcaklık: <b>{city.main.feels_like}</b></h1>
            <h1>Rüzgar Hızı:  <b>{city.wind.speed}</b></h1>
            
      
      </div>
    </div>
  )
}

export default City
