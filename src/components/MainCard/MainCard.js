
const MainCard = ({ date, image, title, info }) => {

  return (
    <div className="main__big" data-testid="maincard">
      <p>{date}</p>
      <img
        src={image}
        alt=""
        className="main__big-image"
        width="300"
        height="300"
      />
      <h3 className="main__title">{title}</h3>
      <div className="main__more">
        <a href="h">{info}</a>
        <div className="main__read-later">
          <i></i>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
