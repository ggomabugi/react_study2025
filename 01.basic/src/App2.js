import React from 'react'





const App2 = () => {
    
    let name = prompt("너의 이름은?")
    let today = new Date();
    let month = today.getMonth()+1;
        
    console.log(today);
    console.log(today.toLocaleDateString()); // 현지 시간 기준 날짜(년/월/일) 반환
    console.log(today.getMonth()+1); // 0~11값으로 반환 -> +1 더해주는 작업 필요

    let season ="";

    // if(month >= 3 && month <= 5){
    //     season = "봄";
    // }else if(month >= 6 && month <= 8){
    //     season = "여름";
    // }else if(month >= 9 && month <= 11){
    //     season ="가을";
    // }else if(month === 12 || month === 1 || month === 2){
    //     season = "겨울";
    // }
    switch(month){
        case 12:
        case 1:
        case 2:
            season = "겨울";
            break;
        case 3:
        case 4:
        case 5:
            season = "봄";
            break;
        case 6:
        case 7:
        case 8:
            season = "여름";
            break;
        case 9:
        case 10:
        case 11:
            season = "가을";
            break;
    }

  return (
    <div>
        <h1>{today.toLocaleDateString()}</h1>
        <hr></hr>
        <p>{name}님 지금은 {season}입니다. 좋은 하루 보내세요:)</p>    
    </div>
  )
}

export default App2