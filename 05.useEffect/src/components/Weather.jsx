import React, { useEffect, useState } from 'react'
import axios from 'axios';
// .env(환경변수파일)
// - 외부에 노출되면 안되는 중요한 데이터를 보관하는 파일
//  ex) api key, url 등을 정의
// .gitignore 파일에 .env설정까지 하면 깃허브에 올릴 때 업로드 되지 않음!
const Weather = () => {

    // https://api.openweathermap.org/data/2.5/weather?q=Gwangju&appid=8e282f5c637c21e859d15031b4a409fe&units=metric

    let city = "Gwangju";
    let API_KEY = import.meta.env.VITE_WEATHER_AIP_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(API_KEY);

    const [cityName,setCityName] = useState();
    const [temp,setTemp]=useState();
    const [icon,setIcon] = useState();
    const [weathers,setWeathers]=useState();

    
    const [today,setToday]=useState();

    // const getWeatherData =async ()=>{
    //         let res = await axios.get(WEATHER_URL);
    //         let data = res.data;
            

    //             // setWeathers({
    //             //     cityName:data.name,
    //             //     temp:data.main.temp,
    //             //     icon:data.weather[0].icon
                    
    //             // });
    //             console.log(weathers.icon);
    //             setCityName(data.name);
    //             setTemp(data.main.temp);
    //             setIcon(data.weather[0].icon)
    //             setToday(`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`);
    //         }
        


    const date = new Date();
    const getWeatherData = ()=>{
            axios.get(WEATHER_URL)
            .then((res)=>res.data)
            .then((data)=>{

                setWeathers({
                    cityName:data.name,
                    temp:data.main.temp,
                    icon:data.weather[0].icon
                    
                });
                // console.log(weathers.icon);
                setCityName(data.name);
                setTemp(data.main.temp);
                setIcon(data.weather[0].icon)
                setToday(`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`);
            })
        }

    useEffect(()=>{

        getWeatherData();

    },[today])

    return (
        <div>
            <h1>{today}</h1>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="날씨아이콘" />
            <p>현재 {cityName}는 {temp}℃ 입니다.</p>
        </div>
    )
}

export default Weather