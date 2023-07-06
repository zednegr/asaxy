import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header.jsx'
import Brands from './components/brands/brands'
import Apps from './components/apps/apps'
import Section from './components/section/section'

function App() {

  return (
    <>
    <Header />
    <Brands/>
    <Apps/>
    <Section/>
    <Footer />
    </>
   
  )
}

export default App