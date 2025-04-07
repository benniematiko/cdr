import "./Partcipate.css"

const Partcipate = () => {
  return (
    <div className="partcipate">
      <div className="container">

        <div className="partcipatetitle">
          <p>Partcipate</p>
        </div>

        <div className="involved">
          <h2>Do you desire to be involved? </h2>
        </div>

        <div className="partcipatecards">
        <div className="leftthird">
          <h2>Send Donation</h2>
          <p>Your donation will go along way in support 
            various activities that contribute to realization 
            on the organization goals.
            </p>

            <p>See the section on <strong>our work</strong> for more information</p>

            <button>Donate Now</button>
        </div>
        <div className="middlethird">
          <h2>Get Involved</h2>
          <p>We are always open to receive like minded persons who desire
            to make a difference in our society as volunteers
          </p>
          <p>There are so many benefits that come along as a volunteer.</p>

        

          <button>Become a Volunteer</button>
        </div>
        <div className="rightthird">
          <h2>Make a Gift</h2>
          <p>Making a gift means extending our reach to more people</p>
          <p> <strong>Discore more</strong> about gifts you can offer </p>
          <button>Make a Gift</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Partcipate
