import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Servies from "./components/Servies"
import bgvideo from "./vi/earth-bg (1).mp4"


function App() {
  return (
    <div>
      <div className=" h-[700px] relative ">
        <video autoPlay muted loop
          className=" fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Servies />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  )
}

export default App
