const Card = () => {
  return (
    <div className="section__card">
      <img
        src="./pexels-kaique-rocha-1812602.jpg"
        alt=""
        className={"main__big-image"}
        width="200"
        height="200"
      />
      <p className="section__text">Text adfskjladfsjkjadfskjladfsl</p>
      <div className="main__more">
        <a href="h">READ MORE</a>
        <div className="main__read-later">
          <i>a</i>
        </div>
      </div>
    </div>
  );
};

export default Card;
