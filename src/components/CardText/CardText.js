const CardText = ({ text, info, icon }) => {
  return (
    <div className="main__aside-top" data-testid="cardtext">
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <a href="h">{info}</a>
        <div className="main__read-later">
          <i>{icon}</i>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardText;
