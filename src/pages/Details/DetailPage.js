/* 
recibe una variable detailType:

- homeNews (no modificable)
- myListNews (modificables)
- createNews (modificable y vacía)
 */
const DetailPage = () => {
  const detailType = ["homeNews", "myListNews", "createNews"];
  const sectionName = "";
  const articleDate = "";
  const imageSource = "";
  const articleTitle = "";
  const articleSubtitle = "";
  const bodyText = "";

  function renderHomeNews() {
    return (
      <main className="main-article">
        <aside className="main-article__aside-left">
          <div className="main-article__aside-name">
            <h2 className="aside__title">{sectionName.toUpperCase()}</h2>
          </div>
        </aside>

        <article className="article">
          <div className="article__content">
            <div className="article__top-image">
              <p>{articleDate}</p>
              <i></i>
              <p>Add to Read Letter</p>
            </div>

            <img
              src={imageSource}
              alt="thumbnail of the article. Api not descriptive enough, sorry"
              className="main__big-image"
            />
            <h3 className="main__title">{articleTitle}</h3>
            <p className="main__subtitle">{articleSubtitle}</p>
            <p>{bodyText}</p>
          </div>
        </article>
      </main>
    );
  }
  function renderMyListNews() {}
  function renderCreateNews() {}

  return (
    <>
      {detailType === "homeNews" && renderHomeNews()}
      {detailType === "myListNews" && renderMyListNews()}
      {detailType === "createNews" && renderCreateNews()}
    </>
  );
  return (
    <main className="main-article">
      <aside className="main-article__aside-left">
        <div className="main-article__aside-name">
          <h2 className="aside__title">SPORT</h2>
        </div>
      </aside>

      <article className="article">
        <div className="article__content">
          <div className="article__top-image">
            <p>15.12.2021</p>
            <i></i>
            <p>Add to Read Letter</p>
          </div>

          <img
            src="./pexels-kaique-rocha-1812602.jpg"
            alt=""
            className="main__big-image"
            width="300"
            height="300"
          />
          <h3 className="main__title">TITLE OF THE MAIN NEW</h3>
          <p className="main__subtitle">
            TITLE OF THE MAIN NEWTITLE OF THE MAIN NEWTITLE OF THE MAIN NEWTITLE
            OF THE MAIN NEWTITLE OF THE MAIN NEW
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sagittis condimentum tincidunt. Vivamus pretium feugiat mauris vel
            elementum. Nulla facilisi. Aliquam erat volutpat. Praesent elementum
            ultrices leo nec fermentum. Vestibulum in varius purus. Nam non eros
            nisi. Integer vel gravida massa. Quisque eu ornare nunc. Quisque
            mauris neque, ultricies at dapibus quis, varius eu erat. In
            fringilla, purus vitae faucibus gravida, neque dui malesuada libero,
            ac eleifend felis mi scelerisque ante. Etiam lacinia, nisl vel
            lacinia vehicula, elit nisi lacinia velit, eu bibendum nulla quam
            vitae elit. Aliquam ut rhoncus sapien. Praesent pretium odio ligula,
            quis congue urna faucibus et. Pellentesque maximus magna augue, in
            semper turpis rhoncus vestibulum. Vivamus consequat, augue eu
            finibus rutrum, libero velit sagittis ipsum, vel pulvinar tellus
            magna et turpis. Vivamus quis cursus orci. Cras eu faucibus mauris.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Praesent vel dolor tempor, finibus ipsum a,
            accumsan nisl. Duis ultrices eros magna, et scelerisque ligula
            consectetur et. Integer sed elit et nunc pretium vulputate et sit
            amet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Cras mi lectus, consequat at
            sollicitudin at, lacinia et leo. Phasellus tincidunt ligula et felis
            aliquam, ac vulputate urna sagittis. Donec lacinia pulvinar dolor,
            sed porta felis gravida ac. Suspendisse sed semper purus. Nunc
            egestas mauris vel vestibulum tincidunt. Maecenas in interdum eros.
            Integer tempor quam arcu. Vivamus sit amet nibh eget urna egestas
            semper non vehicula mauris. Nullam laoreet, sapien pellentesque
            imperdiet pharetra, libero ante pharetra nisi, quis venenatis dolor
            elit ultricies justo. Fusce dapibus sem a libero imperdiet vehicula.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aliquam elementum leo nec iaculis
            scelerisque. Phasellus quis vehicula leo, eu facilisis dolor. Fusce
            et sem ac enim molestie commodo. Fusce sagittis porttitor turpis non
            tincidunt. Vivamus augue magna, pulvinar quis malesuada non,
            faucibus a ante. Curabitur in dolor sed augue mollis semper. In
            sollicitudin lorem ut enim ullamcorper condimentum. Duis lobortis id
            metus non consectetur. Cras vitae iaculis odio, non fermentum odio.
            Nam urna nibh, vehicula nec rhoncus nec, fringilla nec velit.
            Quisque purus sapien, consectetur id risus commodo, scelerisque
            pharetra elit. Duis ipsum risus, venenatis vitae condimentum non,
            ullamcorper a erat. Duis ut bibendum lectus. In eu molestie dui, vel
            pretium magna. Sed efficitur, felis a scelerisque egestas, arcu
            lectus tempus diam, nec scelerisque odio quam non nibh. Etiam eget
            lacus vel nulla sodales aliquam porta luctus sapien. Morbi ac
            placerat nisl. Fusce nibh mauris, elementum sollicitudin nibh sed,
            lacinia dignissim urna. Fusce dapibus sem a libero imperdiet
            vehicula. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Aliquam elementum leo nec iaculis
            scelerisque. Phasellus quis vehicula leo, eu facilisis dolor. Fusce
            et sem ac enim molestie commodo. Fusce sagittis porttitor turpis non
            tincidunt. Vivamus augue magna, pulvinar quis malesuada non,
            faucibus a ante. Curabitur in dolor sed augue mollis semper. In
            sollicitudin lorem ut enim ullamcorper condimentum. Duis lobortis id
            metus non consectetur. Cras vitae iaculis odio, non fermentum odio.
            Nam urna nibh, vehicula nec rhoncus nec, fringilla nec velit.
            Quisque purus sapien, consectetur id risus commodo, scelerisque
            pharetra elit. Duis ipsum risus, venenatis vitae condimentum non,
            ullamcorper a erat. Duis ut bibendum lectus. In eu molestie dui, vel
            pretium magna. Sed efficitur, felis a scelerisque egestas, arcu
            lectus tempus diam, nec scelerisque odio quam non nibh. Etiam eget
            lacus vel nulla sodales aliquam porta luctus sapien. Morbi ac
            placerat nisl. Fusce nibh mauris, elementum sollicitudin nibh sed,
            lacinia dignissim urna. Pellentesque tincidunt nisi vel blandit
            hendrerit. Cras in purus neque. Fusce volutpat pulvinar tincidunt.
            Sed non convallis tellus. Vestibulum auctor lectus eu tellus auctor,
            volutpat semper nisl bibendum. In ac lacinia ex. Etiam vel lacinia
            felis. Suspendisse et urna nisl. Nullam sed turpis a nibh cursus
            egestas. Ut consequat vitae erat in cursus. Nunc id felis sit amet
            odio convallis aliquam. Aenean ornare at erat ut vulputate. Integer
            ac augue in dolor laoreet tincidunt. Pellentesque hendrerit est a
            diam bibendum, vel sagittis nunc sodales. Mauris commodo ornare
            tincidunt. Cras aliquam justo vel finibus eleifend. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Duis pellentesque, sem vitae vestibulum accumsan, justo mi
            tempor dolor, eu imperdiet nisl eros et lectus. Vivamus id semper
            erat, vel commodo quam. Suspendisse vel ligula eu metus dapibus
            iaculis at sed elit. Morbi ipsum justo, dictum a tincidunt a, congue
            ac purus. Morbi pulvinar lacinia nisi, a varius nunc elementum eu.
            Aliquam id tempus felis. Donec sagittis vitae mauris in viverra.
            Aenean venenatis nulla ac quam faucibus, a facilisis lectus
            sollicitudin. Donec volutpat fringilla lacus vitae ultricies. Nulla
            purus elit, rutrum in eleifend a, venenatis non leo. Quisque
            accumsan nisi elit, non placerat nisi convallis id. Suspendisse
            molestie tellus massa, eget ultricies odio vehicula eget. Nullam
            ultrices arcu vitae viverra imperdiet. Duis ut scelerisque enim.
            Maecenas feugiat ipsum eget imperdiet congue. Proin molestie dapibus
            sodales. Ut sed viverra ipsum. Morbi aliquam lacinia lacus, vitae
            egestas nisi aliquet sed. Quisque in ligula vel urna pharetra mattis
            sed at tortor. Quisque euismod aliquam sapien ac posuere.
          </p>
        </div>
      </article>
    </main>
  );
};

export default DetailPage;
