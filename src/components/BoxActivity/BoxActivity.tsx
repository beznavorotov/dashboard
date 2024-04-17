import "./boxActivity.scss";
import { activity } from "../../data.ts";

export const BoxActivity = () => {
  return (
    <>
      {activity.map((activ) => (
        <div className="BoxActivity" key={activ.id}>
          <div className="blok_dark" >
            <span className="text_blok_dark">{activ.title}</span>
          </div>
          <div className="blok_text">
            <span className="date">{activ.date}</span>
            <span className="content">{activ.content}</span>
            <p className="text">{activ.text}</p>
          </div>
          <div className="blok_end" >
            <span className="text_end">{activ.textEnd}</span>
            <button className="btn_orange" type="button" id="">
              See All Activity
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
