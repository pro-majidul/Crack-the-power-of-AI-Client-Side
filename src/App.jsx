
import { Route, Routes } from 'react-router'
import Root from './layout/Root'
import Home from './page/Home'
import GenarateImage from './page/GenarateImage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/genarate' element={<GenarateImage></GenarateImage>}></Route>
      </Route>
    </Routes>
  )
}

export default App
