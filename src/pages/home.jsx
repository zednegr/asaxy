import Hero from '../components/hero/hero'
import Brands from '../components/brands/brands'
import Apps from '../components/apps/apps'
import Section from '../components/section/section'
import Cards from '../components/cards/cards'
import About from '../components/about/about'



function Home() {
    return (
        <>
            <Hero />
            <Cards />
            <About />
            <Brands />
            <Apps />
            <Section />
        </>
    )
}

export default Home