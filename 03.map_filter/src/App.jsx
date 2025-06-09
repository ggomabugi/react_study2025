import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MapArrayExam from './components/MapArrayExam'
import MapObjectExam from './components/MapObjectExam'
import MenuBoard from './components/MenuBoard'
import FilterExam from './components/FilterExam';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* map()함수 실습 1 */}
      {/* <MapArrayExam/> */}
      {/* map()함수 실습 2 */}
      {/* <MapObjectExam/> */}

      {/* filter()함수 실습 */}
      {/* <FilterExam/> */}

      {/* 실습) 음료 메뉴 출력하기 */}
      <MenuBoard/>
    </>
  )
}

export default App
