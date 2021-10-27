import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainCard = ({ mainCard: { date, image, text } }) => {
  const [iconState, setIconState] = useState(false);

  return (
    <div className="main__big">
      <p>{date}</p>
      <img
        src={image}
        alt=""
        className="main__big-image"
        width="300"
        height="300"
      />
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <NavLink to="/details" className="main__more__read">
          Read More
        </NavLink>
        <div className="main__read-later">
          <img src="/images/bookmark_false.png" alt="icono false" className={iconState ? "notShow" : "show"} width="17" height="17" onClick={() => setIconState(!iconState)} />
          <img src="/images/bookmark_true.png" alt="icono false" className={iconState ? "show" : "notShow"} width="17" height="17" onClick={() => setIconState(!iconState)} />
        </div>
      </div>
    </div >
  );
};

export default MainCard;
