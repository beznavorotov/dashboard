import "./smallBoxThree.scss";
import { boxThree } from "../../data.ts";

export const SmallBoxThree = () => {
  return (
    <>
      {boxThree.map(boxe => (
        <div className="smallBoxThree" >
          <span className="name_box">{boxe.name}</span>
          <span className="number_box">{boxe.number}</span>
          <span className="title_box">{boxe.title}</span>
        </div>
      ))}
    </>
  );
};

export default SmallBoxThree;