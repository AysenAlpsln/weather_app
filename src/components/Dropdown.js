import React from 'react'

const Dropdown = () => {
  return (
    <div className='city_container'>
      <select className='cities'>
        <option value="istanbul">İstanbul</option>
        <option value="izmir">İzmir</option>
        <option value="ankara">Ankara</option>
      </select>
    </div>
  )
}

export default Dropdown