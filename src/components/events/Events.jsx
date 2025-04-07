import "./Events.css";
import { LatestNews } from "../../constants/latestnews";

import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="events">
      <div className="container">
        <div className="ourevents">
          <p>Our Events</p>
        </div>
        <div className="newsevents">
          <div className="newstitle">
            <h1>Latest News & Our Events</h1>
          </div>
        </div>

        <div className="newstag">
          <div className="latestag">
            <p>
              Stay informed with our latest news and events from South Sudan and
              around the world.
            </p>
          </div>

          <div className="latestaglinks">
            <p>
              <Link>See all news and events >></Link>
            </p>
          </div>
        </div>

        <div className="latestnewscard">
          {LatestNews.map(( latest, index ) => {
            return (
              <div key={index}  className="latestmaincard">
                <div className="cardleft">
                <div className="cardimg">
                    <img src={latest.image} alt="" className="lastestimg"/>
                  </div>

                </div>

                <div className="cardright">

                  <div className="cardtitle">
                    <h2>
                    {latest.title}
                    </h2>
                    </div>

                  <div className="latestdate">
                    <p>Date: {latest.date}</p>
                  </div>

                  <div className="latestlocation">
                    <p>Location: {latest.location}</p>
                  </div>

                  <div className="latestdesc">
                    <p>Activity: {latest.desc}</p>
                  </div>

                  <button>More Info</button>



                </div>
              </div>
            );
          })}

          {/* {LastestNews.map((lastest, index) => {
              return (
                <div key={index} className="lastestmaincard">
                  <div className="cardimg">
                    <img src={lastest.image} alt="" className="lastestimg"/>
                  </div>
                  <div className="cardimg">{lastest.title}</div>
                </div>
              );
            })} */}
        </div>
      </div>
    </div>
  );
};

export default Events;
