import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const Selectors = () => {
    const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  return (
    <>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
      <Select
        style={{
          width: 120,
        }}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({
          label: city,
          value: city,
        }))}
      />
    </>
  )
}

export default Selectors;