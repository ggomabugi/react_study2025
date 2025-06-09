import React, { useRef } from 'react'

const LofinForm = () => {
    const userId = useRef("");
    const userPw = useRef("");

    const handleSubmit =(e)=>{
        
        e.preventDefault();
        console.log("userId : " + userId.current.value);
        console.log("userPw : " + userPw.current.value);
        if(!userId.current.value || !userPw.current.value){
            alert('값을 입력해 주세요');
            return; // handleSubmit 동작 종료
        }

        if(userPw.current.value.length < 6){
            alert('6자리 이상 작성해주세요.')
            return;
        }
        
    }

  return (
    <div>
        <h1>로그인 폼</h1>
        <form>
            <p><input type="text" ref={userId} /></p>
            <p><input type="password" ref={userPw}/></p>
            <p><input type="submit" onClick={handleSubmit} value ="로그인"/></p>
        </form>
    </div>
  )
}

export default LofinForm