import "./smallBoxTwo.scss";
import { boxTwo } from "../../data.ts";

export const SmallBoxTwo = () => {
  return (
    <>
      {boxTwo.map(box => (
        <div className="smallBoxTwo" >
          <span className="name_box">{box.name}</span>
          <span className="number_box">{box.number}</span>
          <span className="title_box">{box.title}</span>
        </div>
      ))}
    </>
  );
};

export default SmallBoxTwo;