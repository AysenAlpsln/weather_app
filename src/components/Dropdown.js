import React from 'react';
import cityList from "../folders/cities_of_turkey.json";
import { useSelect } from "../contexts/SelectContext";


const Dropdown = () => {
  const { setSelect } = useSelect();
  const handleChange = (event) => setSelect(event.target.value);

  return (
    <div className='city_container overflow-hidden'>
      <select id='select' className='cities' onChange={handleChange}>
        {cityList.map((city) => (
          <option key={city.id} value={city.name}>{city.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown