import './App.css'
import './index.css'
import HeroSection from './components/HeroSection'
import Community from './components/Community'
import Location from './components/Location'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Collaboration from './components/Collaboration'
// import Indicator from './components/Indicator'

function App() {

  return (
    <>
      {/* <Indicator/> */}
      <Navbar/>
      <HeroSection/>
      <Community/>
      <Location/>
      <Menu/>
      <Collaboration/>
      <Footer/>
    </>
  )
}

export default App
