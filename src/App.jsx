import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Leadership from './pages/Leadership/Leadership'
import Tracks from './pages/Tracks/Tracks'
import Events from './pages/Events/Events'

const App = () => {
  return (<>
  <BrowserRouter>
    <Header/>
    <Routes>
      {/* <Route path="/" element={<Header/>} /> */}
      <Route path="/leadership" element={< Leadership/>} />
      <Route path="/tracks" element={<Tracks/>} />  
      <Route path="/events" element={<Events/>} /> 
    </Routes>
  </BrowserRouter>
  
     

  </>)
}
export default App
