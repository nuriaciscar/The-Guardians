const CardText = ({ text }) => {
  return (
    <div className="main__aside-top" data-testid="cardtext">
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <a href="h">a</a>
        <div className="main__read-later">
          <i></i>

        </div>
      </div>
    </div>
  );
};

export default CardText;
