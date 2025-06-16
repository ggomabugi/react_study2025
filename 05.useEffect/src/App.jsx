import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import ChamChamCham from './components/ChamChamCham'
import Weather from './components/Weather'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count/> */}
      {/* <ChamChamCham/> */}
      {/* <Weather/> */}
      <MovieList/>
    </>
  )
}

export default App
