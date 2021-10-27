import { NavLink } from "react-router-dom";

const Card = ({ image, text, info, icon }) => {
  return (
    <div className="section__card" data-testid="square">
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

// content.fields.thumbnail
export default Card;
