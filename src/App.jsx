import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Rooms from './components/RoomsGrid'
import Services from './components/Services'
import StatsBar from './components/StatsBar'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

function App() {


  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <StatsBar/>
      <Rooms/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
