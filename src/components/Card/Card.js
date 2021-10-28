import { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ card: { image, text } }) => {
  const [iconState, setIconState] = useState(false);
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
      <div className="main__more__card">
        <NavLink to="/details" className="main__more__read">
          READ MORE
        </NavLink>

        <div className="main__read-later">
          <img
            src="/images/bookmark_false.png"
            alt="icono false"
            className={iconState ? "notShow" : "show"}
            width="17"
            height="17"
            onClick={() => setIconState(!iconState)}
          />
          <img
            src="/images/bookmark_true.png"
            alt="icono false"
            className={iconState ? "show" : "notShow"}
            width="17"
            height="17"
            onClick={() => setIconState(!iconState)}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
