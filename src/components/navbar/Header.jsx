import "./Header.css";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="container">
        
        <div className="header-text">
          <span>Work and results through communities</span>
          <h2>Our Mission is to Attain a Viable Society</h2>
          <p>All our programs are executed through local communities who is the main target and beneficiary</p>

          <button>Read More</button>

          
        </div>

      

        
      </div>
    </div>
  );
};

export default Header;
