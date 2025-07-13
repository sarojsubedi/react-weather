import React from 'react'
import { useState } from 'react';
import WeatherConverter from './WeatherConverter';

const WeatherCard = () => {

    // const [searchCity, setSearchCity] = useState("Kathmandu");
    // // const typeTheCity = () => {
    // //   <WeatherConverter name = {searchCity}/>
    // //   setSearchCity("");
    // // }

  return (
    <>
        {/* <form action="submit"> */}
            {/* <input type="text" placeholder='type a city' value ={searchCity} onChange={(e)=> setSearchCity(e.target.value)} /> */}
            {/* <button  onClick={()=>{<WeatherConverter name= {searchCity}/>}}>Search</button> */}
            <button type="reset">Reset</button>
        {/* </form> */}
        <p>ignore this</p>
    </>
  )
}

export default WeatherCard