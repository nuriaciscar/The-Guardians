import "./NotFoundPages.scss";

const NotFoundPage = () => {
  return (
    <main className="notFound">
      <div className="notFound__container">
        <img
          src="../images/cry.png"
          alt="Sadness crying"
          width="400"
          height="400"
        ></img>
        <p>Page not found</p>
      </div>
    </main>
  );
};

export default NotFoundPage;
