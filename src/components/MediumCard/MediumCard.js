const MediumCard = () => {
  return (
    <div className="main__aside-bottom">
      <img
        src="./pexels-kaique-rocha-1812602.jpg"
        alt=""
        className="main__big-image"
        width="100"
        height="100"
      />
      <h3 className="main__title">TITLE OF THE MAIN NEW</h3>
      <div className="main__more">
        <a href="h">READ MORE</a>
        <div className="main__read-later">
          <i>a</i>
          <p>Add to Read Letter</p>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
