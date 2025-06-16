import React, { useEffect, useState } from 'react'
import Timer from './Timer';

const Count = () => {

    const [value,setValue] = useState(0)
    const [value2,setValue2] = useState(0)
    const[showTimer,setShowTimer] = useState(true);

    const handleClick = () => {
    //    console.log("클릭");
        // useState는 제일 마지막에 있는 useState만 실행된다
        // stste을 바로 접근해서 사용하는 방식 -> 이전값을 참조하지 않기 때문에
        // 마지막 setState()의 연산값만 반영
        // setValue(value+1);
        // setValue(value+2);
        // setValue(value+3);
        // setValue(value+4);


        // useState를 한번에 여러번 사용해야할때는 funtion의 형태로 만들어서 사용해야
        // 한번에 여러번 작동이 된다.
        // setState 호출할 때 이전에 값을 참조해서 더하는 방식
        setValue((value)=>value+1);
        setValue((value)=>value+2);
        setValue((value)=>value+3);
        setValue((value)=>value+4);
        
        

    };
    const handleClick2 = () => {
    //    console.log("클릭");
        setValue2(value2+2);

    };

    // useEffect() 구조 -> 처음 랩 실행될 때 한번만 실행
    useEffect(()=>{
            console.log("앱시작!!");
        },[]);

    // 앱 실행 중 state에 변경되었을 때
    // []안에 state변수 추가
    // useEffect(()=>{
    //     console.log("업데이트");
        
    // },[value]);
    // useEffect(()=>{
    //     console.log("업데이터2");
    // },[value2])
    useEffect(()=>{
        console.log("업데이터3");
    },[value,value2])
    return (
    <div>
        <h1>useEffect() 실습</h1>
        <p>{value}</p>
        <p>{value2}</p>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleClick2}>2증가</button>
        <hr />
        <button onClick={()=>setShowTimer(!showTimer)}>타이머 보이기</button>
        {showTimer && <Timer/>}
    </div>
    )
}

export default Count