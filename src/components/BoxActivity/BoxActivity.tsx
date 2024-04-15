import "./boxActivity.scss";

export const BoxActivity = () => {
  return (
    <div className="BoxActivity">
      <div className="blok_dark">
        <span className="">Recently Activity</span>
      </div>
      <div className="blok_text">
        <span className="data">10.40 AM, Fri 10 Sept 2021</span>
        <span className="content">You Posted a New Job</span>
        <p className="text">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div className="blok_end">
        <span className="text_end">Today you makes 12 Activity</span>
        <button className="btn_orange" type="button" id="">
          See All Activity
        </button>
      </div>
    </div>
  );
};
