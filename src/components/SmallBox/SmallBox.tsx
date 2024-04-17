import "./smallBox.scss";
import { box } from "../../data.ts";

export const SmallBox = () => {
  return (
    <>
      {box.map(boxes => (
        <div className="smallBox" >
          <span className="name_box">{boxes.name}</span>
          <span className="number_box">{boxes.number}</span>
          <span className="title_box">{boxes.title}</span>
        </div>
      ))}
    </>
  );
};

export default SmallBox;