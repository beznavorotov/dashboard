import { announcement } from "../../data";
import "./announcement.scss";

export const Announcement = () => {
  return (
    <div className="announcement">
      <div className="title">
        <h1>Announcement</h1>
        <span className="date">
          Today, 13 Sep 2021 <img src="/icons/vector.svg" alt="" />
        </span>
      </div>
      {announcement.map((an) => (
      <div className="blok" key={an.id}>
        {an.listItem.map((listItem) => (
        <div className="blokOne" key={listItem.id}>
          <h3>{listItem.title}</h3>
          <span className="text">{listItem.text}</span>
        </div>
                    ))}
        <div className="blokTwo">
          <img src="/icons/bi_pin-angle-fill.svg" alt="" />
          <img src="/icons/carbon_overflow-menu-horizontal.svg" alt="" />
        </div>

      </div>
      ))}
      <span className="btn">See All Announcement</span>
    </div>
  );
};
