import Navbar from './Components/Navbar'
import Inicio from './Components/Inicio'
import Menu from './Components/Menu'
import Portafolio from './Components/Portafolio'
import { Routes ,Route } from 'react-router-dom'

function App() {

  return <>
    <Navbar/>
    <Routes>
      <Route path="/*" element={<Inicio/>} />
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/portafolio" element={<Portafolio/>} />
    </Routes>
    </>
}

export default App
