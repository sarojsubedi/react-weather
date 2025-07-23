import { useState, useEffect } from 'react';
import styles from './weatherconverter.module.css'

function WeatherConverter() {
    const [city, setCity] = useState("Kathmandu");
    const [utaKoResult, setUtaKoResult] = useState({});
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

useEffect (()=>{
    const weather = async () => {
        setIsLoading(true);
        const response = await fetch(`https://goweather.xyz/weather/${city}`);
        const result = await response.json();
        setUtaKoResult(result);
        setError(response.status == 404 ? true : false);
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
        <div className={styles.card}>
        <div className={styles.mainform}>        
            <form action="">
            <input type="text" placeholder='Enter City Name' value = {userInput} onChange ={(e)=>setUserInput(e.target.value)}/>
            <button type="submit" onClick={(e)=> storeCity(e)}>Search</button>
            </form>
        </div>

        <div className={styles.error}>{error && <p>City not found</p>}</div>
        <div className={styles.error}>{isLoading && (<p>Loading is a bit slow, have patience.</p>)}</div>
        
        <div className={styles.result}>
            <p>City: {city}</p>
            <p>Temperature: {utaKoResult.temperature}</p>
            <p>Description : {utaKoResult.description}</p>
            <p>Wind: {utaKoResult.wind}</p>
        </div>
        </div>
    );
}
export default WeatherConverter;