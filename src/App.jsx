import './App.css'
import './index.css'
import HeroSection from './components/HeroSection'
import Community from './components/Community'
import Location from './components/Location'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Collaboration from './components/Collaboration'
import Indicator from './components/UI/Indicator'
import RequestBtn from './components/UI/RequestBtn'

function App() {

  return (
    <>
      <Indicator/>
      <RequestBtn/>
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
