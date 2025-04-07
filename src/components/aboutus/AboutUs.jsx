import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="aboutusimage">
          <img src="./vt__two.jpg" alt="" className="abtusimg" />
        </div>
        <div className="aboutusright">
          <div className="aboutustitle">
            <p>About Us</p>
          </div>
          <div className="aboutusmaintitle">
            <h1>Empowerment Of Actors of Change </h1>

          
          </div>

          <div className="aboutustext">
            <p>

           
              Centre for Development & Research (CDR) - South Sudan is primarily
              involved in the mission of creating a dynamic society through
              empowerment of actors of change and building effective
              relationships to promote culture of peace and sustainable.
            </p>
          </div>

          <div className="aboutusbtn">
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
