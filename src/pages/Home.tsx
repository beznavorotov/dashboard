import { Announcement } from "../components/Announcement/Announcement";
import { BoxActivity } from "../components/BoxActivity/BoxActivity";
import SmallBox from "../components/SmallBox/SmallBox";
import SmallBoxThree from "../components/SmallBoxThree/SmallBoxThree";
import SmallBoxTwo from "../components/SmallBoxTwo/SmallBoxTwo";
import { Upcoming } from "../components/Upcoming/Upcoming";
import { GraphOne } from "../components/graphOne/GraphOne";
import { GraphTwo } from "../components/graphTwo/GraphTwo";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="panel">
        <span className="search">
          <span className="search_text">Search</span>{" "}
          <img src="/icons/union.svg" alt="" />{" "}
        </span>
        <div className="info">
          <img src="/icons/ic_round-notifications.svg" alt="" />
          <img src="/icons/bi_chat-left-dots-fill.svg" alt="" />
          <img src="/icons/photo.svg" alt="" />
          <span>Admirra John</span>
          <img src="/icons/vector.svg" alt="" />
        </div>
      </div>
      <h1>Dashboard</h1>
      <div className="boxes">
        <div className="box box1">
          <SmallBox />
        </div>
        <div className="box box2">
          <SmallBoxTwo />
        </div>
        <div className="box box3">
          <SmallBoxThree />
        </div>
        <div className="box box4">
          <BoxActivity />
        </div>
        <div className="box box5">
          <GraphOne />
        </div>
        <div className="box box6">
          <GraphTwo />
        </div>
        <div className="box box7">
          <Upcoming/>
        </div>
        <div className="box box8"><Announcement /></div>
      </div>
    </div>
  );
};

export default Home;
