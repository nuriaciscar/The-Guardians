const MediumCard = ({image, icon, info, text}) => {
  return (
    <div className="main__aside-bottom" data-testid="mediumcard">
      <img
        src={image}
        alt=""
        className="main__big-image"
        width="100"
        height="100"
      />
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <a href="h">{info}</a>
        <div className="main__read-later">
          <i>{icon}</i>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
