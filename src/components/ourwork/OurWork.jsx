import "./OurWork.css";
import { OurWorkDatas } from "../../constants/ourwork";

const OurWork = () => {
  return (
    <div className="ourwork">
      {/* Import component line */}

      <img src="./linewhite.png" alt="" className="linewhiteimg" />

      <div className="container">
        <div className="ourworktitle">
          <p>What do we do?</p>
        </div>
        <div className="ourworkmaintitle">
          <h1>Empowerment Of Actors of Change </h1>
        </div>
        <div className="ourworktext">
          <p>
            Centre for Development & Research (CDR) - South Sudan is primarily
            involved in the mission of creating a dynamic society through
            empowerment of actors of change and building effective relationships
            to promote culture of peace and sustainable.
          </p>
        </div>

        <div className="ourworkcards">
          {OurWorkDatas.map((ourworkdata, index) => {
            return (
              <div key={index}className="ourworkcard">
                <div className="ourworkimage">
                  <img src={ourworkdata.image} alt="" className="imgcard" />
                </div>

                <div className="details">
                  <div className="ourworkcardtitle">
                    <p>{ourworkdata.title}</p>
                  </div>

                  <div className="ourworkdesc">
                    <p>{ourworkdata.description}</p>
                  </div>
                  <div className="morebtn">
                    <button>Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
