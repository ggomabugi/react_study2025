import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubox from './components/Menubox'
import MemberInfo from './components/MemberInfo'
import Count from './components/Count'


/*
  1. Component(컴포넌트)
  - UI를 표현하는 최소 단위
  - 컴포넌트를 만들 때 파일명은 반드시 대문자로 정의
  2. props(프로퍼티)
  - 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
  - 값을 전달하는 방식은 객체({key:value})로 전달
    ex) <Menubox menuNm ={"아메리카노"} price ={2500}/>
      -> {"menuNm":"아메리카노", "price" : 2500}형태로 생성한 후 하위 컴포넌트로 전달
  - 상위 컴포넌트로 부터 전달받은 값을 담고 있는 객체
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    // <> 실행할때 div 태그로 변한다
    <> 
     {/* <Menubox menuNm= {"아메리카노"} price = {2500} />
     <Menubox menuNm = {"카페라떼"} price = {3000}/>
     <Menubox menuNm = {"콜드블루"} price = {3500}/> */}

      {/* 실습) 야구팀 대표 투수 정보(야구팀명, 투수명) 출력해보기 */}
      {/* <MemberInfo teamNm ={"KIA 타이거즈"} memberNm ={"양현종"}/>
      <MemberInfo teamNm ={"SSG 랜더스"} memberNm ={"김광현"}/>
      <MemberInfo teamNm ={"두산 베어스"} memberNm ={"유희관"}/>
      <MemberInfo teamNm ={"한화 이글스"} memberNm ={"류현진"}/> */}

      {/* <div className='container'>
      <MemberInfo teamNm ={"KIA 타이거즈"} memberNm ={"양현종"}/>
      <MemberInfo teamNm ={"SSG 랜더스"} memberNm ={"김광현"}/>
      <MemberInfo teamNm ={"두산 베어스"} memberNm ={"유희관"}/>
      <MemberInfo teamNm ={"한화 이글스"} memberNm ={"류현진"}/>
      </div> */}
    {/* state 실습 */}
        <Count/>


    </>
  )
}

export default App
