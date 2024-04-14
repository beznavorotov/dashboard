import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="panel">
        <span className="search">
         <span className="search_text">Search</span>  <img src="/icons/union.svg" alt="" /> </span>
         <div className="info">
         <img src="/icons/ic_round-notifications.svg" alt="" />
        <img src="/icons/bi_chat-left-dots-fill.svg" alt="" />
        <img src="/icons/photo.svg" alt="" />
        <span>Admirra John</span>
        <img src="/icons/vector.svg" alt="" />
         </div>

      </div>
      <div className="boxes">
        <div className="box box1">box1</div>
        <div className="box box2">box2</div>
        <div className="box box3">box3</div>
        <div className="box box4">box4</div>
        <div className="box box5">box5</div>
        <div className="box box6">box6</div>
        <div className="box box7">box7</div>
        <div className="box box8">box8</div>
      </div>
    </div>
  );
};

export default Home;
