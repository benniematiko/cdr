import "./OurTeam.css"
import { OurTeamDatas } from "../../constants/ourteam"

import { Link } from  "react-router-dom"

const OurTeam = () => {
  return (
    <div className="ourteam">
      <div className="container">

        <div className="ourteamtitle">
          <p>Meet Our Team</p>
        </div>

        <div className="volunteersfounders">
          <h1>Our Volunteers & Founders</h1>
        </div>

        <div className="volunteerstext">
          <p>Minds dedicted to serving and impacting the society</p>

          <p><Link>See more >></Link> </p>
        </div>

        <div className="teamcards">

          {
            OurTeamDatas.map((teamdata,index)=>{
              return (
                <div key={index} className="teamcard">

                  <div className="teamimage">
                    <img src={teamdata.image} 
                    alt="" className="teamimg"/>
                  </div>

                  <div className="teamname">
                    <p>{teamdata.name}</p>
                  </div>

                  <div className="teamtitle">
                    {teamdata.jobtitle}
                  </div>
                  <div className="teamcontact">
                    <p><Link>Facebook | X | Linkedin</Link></p>
                  </div>

                </div>
              )
            })
          }
          
        </div>
      </div>
      
    </div>
  )
}

export default OurTeam
