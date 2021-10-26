const Card = ({ image, text, info, icon }) => {
  return (
    <div className="section__card" data-testid="square">
      <img
        src={image}
        alt=""
        className={"main__big-image"}
        width="200"
        height="200"
      />
      <p className="section__text">{text} </p>
      <div className="main__more">
        <a href="h">{info}</a>
        <div className="main__read-later">
          <i>{icon}</i>
        </div>
      </div>
    </div>
  );
};

// content.fields.thumbnail
export default Card;
