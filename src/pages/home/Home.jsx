import "./Home.css"
import OurWork from "../../components/ourwork/OurWork"
import Stats from "../../components/stats/Stats"
import AboutUs from "../../components/aboutus/AboutUs"
import Events from "../../components/events/Events"
import OurTeam from "../../components/team/OurTeam"
import Partcipate from "../../components/partcipate/Partcipate"

const Home = () => {
  return (
    <div>

      <Stats />
    
      <AboutUs />

      <Events />

     
      <OurWork />

      <OurTeam />

      <Partcipate />
      
    </div>
  )
}

export default Home
