import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieList = () => {

    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
    const today = new Date();
    const targetDt = '20250611'
    // let toGetDay = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`
    const MOVIE_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDt}`;
    console.log(today);
    // console.log(toGetDay);
    const [movieList,setMovieList]= useState(null);
    // const [movise,setMovise]=useState(null);
    const getMovieList= async ()=>{
        let res = await axios.get(MOVIE_URL);
        let data = res.data;
        console.log(data);
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
        let toDayMovieList = data.boxOfficeResult.dailyBoxOfficeList;
        // list.map((item,index)=>(
            // list.map을 활용해서 list의 길이 만큼 반복해주는 
            // ))
        setMovieList(
            toDayMovieList.map((item,index)=>(
                <p key={index}>{item.rank}.{item.movieNm}|{item.openDt}</p>
            ))
        );
        // let movise = toDayMovieList.map((item)=>({
        //     rank : item.rank,
        //     movieNm : item.movieNm,
        //     openDt : item.openDt
        // }))
        // setMovise(movise);

    }
    
    useEffect(()=>{
        getMovieList();
    },[])

    return (
        <div>
            <div>
            <h1>영화 순위</h1>
            {movieList}
            </div>
            {/* <div>
                <h1>영화순위2</h1>
                <div>
                    {movise.map((movie,index)=>(
                        <p key={index}>{movie.rank}.{movie.movieNm}|{movie.openDt}</p>
                    ))}
                </div>
            </div> */}
        </div>

    )
}

export default MovieList