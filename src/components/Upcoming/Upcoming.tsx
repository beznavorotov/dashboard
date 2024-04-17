import { upcoming } from "../../data";
import "./upcoming.scss";

export const Upcoming = () => {
  return (
    <div className="upcoming">
      <div className="title">
        <h1>Upcoming Schedule</h1>
        <span className="date">
          Today, 13 Sep 2021 <img src="/icons/vector.svg" alt="" />
        </span>
      </div>
      {upcoming.map((up) => (
        <div key={up.id}>
          <span className="text_title">{up.title}</span>
          <div className="blok">
            {up.listItem.map((listItem) => (
              <div className="blokOne" key={listItem.id}>
                <h3>{listItem.title}</h3>
                <span className="text">{listItem.text}</span>
              </div>
            ))}
            <div className="blokTwo">
              <img src="/icons/carbon_overflow-menu-horizontal.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
      <span className="btn">Creat a New Schedule</span>
    </div>
  );
};
