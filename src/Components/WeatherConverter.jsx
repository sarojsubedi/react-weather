import { useState, useEffect } from 'react';

function WeatherConverter() {
    const [city, setCity] = useState("Kathmandu");
    const [utaKoResult, setUtaKoResult] = useState({});
    const [userInput, setUserInput] = useState("Kathmandu");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

useEffect (()=>{
    const weather = async () => {
        setIsLoading(true);
        const response = await fetch(`https://goweather.xyz/weather/${city}`);
        const result = await response.json();
        setUtaKoResult(result);
        setError(!response.status == 200 ? true : false);
        setIsLoading(false);
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
        {isLoading? (<p>Loading is a bit slow, have patience.🫩</p>):
        (<div><p>City: {city}</p>
        <p>Temperature: {utaKoResult.temperature}</p>
        <p>Description : {utaKoResult.description}</p>
        <p>Wind: {utaKoResult.wind}</p></div>)}
        
        </>
    );
}
export default WeatherConverter;