import { useState, useEffect } from 'react';

function WeatherConverter() {
    const [city, setCity] = useState("Kathmandu");
    const [utaKoResult, setUtaKoResult] = useState({});
    const [userInput, setUserInput] = useState("Kathmandu");
    let error = false;

useEffect (()=>{
    const weather = async () => {
        const response = await fetch(`https://goweather.xyz/weather/${city}`);
        const result = await response.json();
        setUtaKoResult(result);
        error = response.status == 404 ? true : false
};
weather();
}, [city]);

function storeCity(e){
    e.preventDefault();
    setCity(userInput);
    setUserInput("");
}

    return (
        <>
        <form action="">
            <input type="text" placeholder='Enter City Name' value = {userInput} onChange ={(e)=>setUserInput(e.target.value)}/>
            <button type="submit" onClick={(e)=> storeCity(e)}>Search</button>
        </form>
        <div>{error && <p>City not found</p>}</div>
        <p>City: {city}</p>
        <p>Temperature: {utaKoResult.temperature}</p>
        <p>Description : {utaKoResult.description}</p>
        <p>Wind: {utaKoResult.wind}</p>
        </>
    );
}
export default WeatherConverter;