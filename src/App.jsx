import './App.css'
import { Routes, Route } from "react-router-dom"
import Footer from './components/footer/footer'
import Header from './components/header/header.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import CardsInner from './components/card-inner/card-inner'
import Home from './pages/home'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card_inner' element={<CardsInner />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App