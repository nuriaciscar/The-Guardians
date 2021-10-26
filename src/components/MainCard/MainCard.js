const MainCard = () => {
  return (
    <div className="main__big">
      <p>15.12.2021</p>
      <img
        src="./pexels-kaique-rocha-1812602.jpg"
        alt=""
        className="main__big-image"
        width="300"
        height="300"
      />
      <h3 className="main__title">TITLE OF THE MAIN NEW</h3>
      <div className="main__more">
        <a href="h">READ MORE</a>
        <div className="main__read-later">
          <i></i>
          <p>Add to Read Letter</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
