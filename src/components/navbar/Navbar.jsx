import "./Navbar.css"

// import { assets } from "../assets/assets"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

import { Link } from "react-router-dom"

const Navbar = () => {

  const [ click, setClick ] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  return (
   
    <div className="navbar">

      <div className="container">
        {/* <img src="./logo__cdr.png" alt="" className="logo-img" /> */}
        <Link to="/"><img src="./logo__cdr__white.png" alt="" className="logo-img" /></Link>
        {/* <ul className="links"> */}
        <ul className={click ? "links active" : "links"}>
          <Link to="./partcipate">Participate</Link>
          <Link to="./partners">Partners</Link>
          <Link to="./activities">Activities</Link>          
          <Link to="./donate"><button>DONATE</button></Link>        
          
        </ul>

        {/* <div className="closeNavbar">
            <span>X</span>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <span>bars</span>
          </div> */}

          <div className="nav-icon" onClick={handleClick}>
            <span className={ click ? <FaTimes /> : <FaBars /> }></span>
          </div>
        
      </div>
      
    </div>
  )
}

export default Navbar
