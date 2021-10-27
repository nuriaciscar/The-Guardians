import { NavLink } from "react-router-dom";

const MainCard = ({ mainCard: { date, image, text, icon } }) => {
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
          <i>{icon}</i>
          <p>Add to Read Later</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
