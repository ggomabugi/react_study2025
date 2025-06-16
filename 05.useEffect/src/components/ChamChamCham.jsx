import React, { useEffect, useState } from 'react'

/*
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할입니다.
    2. '좌','정면','우', 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
        - 같은 선택일 경우 : 사용자의 승리!
        - 다른 선택일 경우 : 컴퓨터의 승리
    3. 승리에 대한 결과를 화면에 출력합니다.

    * '좌','정면','우' 값은 배열로 만들어서 활용할 것!
    * 사용자, 컴퓨터, 결과값에 대한 state 생성할 것!
*/ 

const ChamChamCham = () => {

    const chamList = ["좌","정면","우"];

    const [userCham,setUserCham] = useState('');
    const [comCham,setComCham] = useState('');
    const [result,setResult]= useState('');

    const handleCham = (e) => {
        const comIndex = parseInt(Math.random()*chamList.length);
        setUserCham(chamList[e.target.value]);
        setComCham(chamList[comIndex]);
        
    }
// useEffect를 사용하면 렌더링이 밀리는 현상이 없다
    useEffect(()=>{
        if(userCham === '' || comCham === '') return;
        if(userCham === comCham){
                setResult("게임결과 : 나의 승리");
        }else{
            setResult("게임결과 : 컴퓨터의 승리");
        }
        // 삼항연산자를 통해서 사용이 가능하다
        // userCham === comCham? setResult("게임결과 : 나의 승리"):setResult("게임결과 : 컴퓨터의 승리");
    },[userCham,comCham])

    return (
    <div>
        <h1>참참참 게임!</h1>
        <h3>나의 선택 : {userCham}</h3>
        <h3>컴퓨터의 선택 : {comCham}</h3>
        {result === ''?<h3></h3>:<h3>{result}</h3>}
        {/* 아래와 같이 입력할때 공백이면 false로 인식한다 */}
        {/* ""(공백)은 false로 인식하기 때문에 오른쪽의 태그를 출력하지 않음
            result state에 값이 초기화되면 true로 인식하면서 결과값을 출력 */}
        {/* {result && <h3>{result}</h3>} */}
        <button onClick={handleCham} value={0}>좌</button>
        <button onClick={handleCham} value={1}>정면</button>
        <button onClick={handleCham} value={2}>우</button>
    </div>
    )
}

export default ChamChamCham