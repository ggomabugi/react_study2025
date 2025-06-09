import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';


const ImgChangeExam = () => {

    let keywordRef = useRef(); // input 태그에 ref를 걸어서 사용한다
    let imgRef = useRef(); // img 태그에 ref를 걸어서 사용한다
    const [imgChg,setImgChg] = useState("/src/img/daram.jpg");

    const ImgChange =(e)=>{
        
        e.preventDefault();
        if(keywordRef.current.value === "강아지"){
            // setImgChg("/src/img/dog.jpg");
            console.log(imgRef);
            imgRef.current.src = "/src/img/dog.jpg"
            // imgRef.current.src = "이미지 경로" ;
        }else if(keywordRef.current.value === "다람쥐"){
            setImgChg("/src/img/daram.jpg");
        }else{
            alert("다람쥐와 강아지 중 하나를 입력해주세요");
        }
        keywordRef.current.value = '';
        keywordRef.current.focus();
    }

  return (
    <div>
        <div>희망하는 사진이 있으신가요?</div>
        <div>
            <form>
            <span><input type="text" ref={keywordRef}/></span>
            <span><input type="submit" onClick={ImgChange} value="변경"/> </span>
            </form>
        </div>
        <div>
            {/* \src\img\daram.jpg */}
            <span><img style={{width : 150, height : 150}} ref={imgRef} src={imgChg} alt="이미지 오류"/></span>
        </div>
    </div>
  )
}

export default ImgChangeExam