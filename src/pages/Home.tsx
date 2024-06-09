import NavbBar from "../components/NavbBar"
import Hero from "../components/Hero"
import Books from "../components/Books"
import AboutUs from "../components/AboutUs"
import Team from "../components/Team"
import ViralNews from "../components/ViralNews"
import Attendance from "../components/Attendance"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"


function Home() {
  return (
    <div>
        <NavbBar />
        <Hero />
        <Books />
        <AboutUs />
        <Team /> 
        <ViralNews />
        <Attendance />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Home