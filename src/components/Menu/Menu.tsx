import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data.ts";

function Menu() {
  return (
    <div className="blok_menu">
      <div className="logo">
        <span>WeHR</span>
      </div>

      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItem.map((listItem) => (
            <Link to="/" className="listItem" key={listItem.id}>
              <img src={listItem.icons} alt={listItem.alt} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
