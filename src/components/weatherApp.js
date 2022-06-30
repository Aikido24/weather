import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from './weatherApp.module.css';
import Loader from "./loader";
const WeatherApp = ()=>{
    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        loadInfo()  
    },[]);
    useEffect(()=>{
        document.title = `Weather| ${weather?.location.name??''}`
    },[weather])
    const loadInfo= async(city='london')=>{
        try{
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            const json = await request.json();
            setWeather(json);
            console.log(json);
        }catch(error){

        }

    }
    const handleChangeCity =(city)=>{
        setWeather(null);
        loadInfo(city);
    }
    return(
        <div className={styles.weatherContainer}>
       
            <WeatherForm onChangeCity={handleChangeCity}/>
            
            {weather?<WeatherMainInfo weather={weather}/>:<Loader/>}
            
        </div>
    )
}


export default WeatherApp