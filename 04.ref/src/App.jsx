import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefExam from './components/RefExam'
import LofinForm from './components/LofinForm'
import ImgChangeExam from './components/ImgChangeExam'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* 실습1 렌더링 변화 */}
      {/* <RefExam/> */}
      {/* 실습 2 form  */}
      {/* <LofinForm/> */}
      {/* 실습3 이미지 변경 */}
      <ImgChangeExam/>
    </>
  )
}

export default App
