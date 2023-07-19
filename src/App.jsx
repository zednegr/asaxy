import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header.jsx'
import Hero from './components/hero/hero'
import Brands from './components/brands/brands'
import Apps from './components/apps/apps'
import Section from './components/section/section'
import Cards from './components/cards/cards'
import CardsInner from './components/card-inner/card-inner'


function App() {

  return (
    <>
    <Header />
    <Hero />
    <Cards/>
    <Brands/>
    <Apps/>
    <Section/>
    <Footer />
    <CardsInner />
  
  </> 
  )
}

export default App