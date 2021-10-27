import { NavLink } from "react-router-dom";

const CardText = ({ cardText: { text, icon } }) => {
  return (
    <div className="main__aside-top">
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <NavLink to="/details" className="main__more__read">
          Read More
        </NavLink>
        <div className="main__read-later">
          <i>{icon}</i>
          <p>Add to Read Later</p>
        </div>
      </div>
    </div>
  );
};

export default CardText;
