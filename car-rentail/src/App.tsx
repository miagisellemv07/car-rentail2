import Dashboard from './views/Dashboard'
import Contacto from './views/Contacto'
import "./app.css"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App