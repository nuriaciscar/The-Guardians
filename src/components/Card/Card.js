import { NavLink } from "react-router-dom";

const Card = ({ card: { image, text, icon } }) => {
  return (
    <div className="section__card">
      <img
        src={image}
        alt=""
        className={"card__image"}
        width="200"
        height="100"
      />
      <p className="section__text">{text} </p>
      <div className="main__more">
        <NavLink to="/details" className="main__more__read">
          Read More
        </NavLink>

        <div className="main__read-later">
          <i>{icon}</i>
        </div>
      </div>
    </div>
  );
};
export default Card;
