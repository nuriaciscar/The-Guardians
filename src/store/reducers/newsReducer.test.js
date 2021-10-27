import { Factory } from "fishery";

const news = getNews();
const renderedComponent = ReactTestRenderer.create();
    <NewsContextProvider>
      <Kitty news={{ news }} />
    </NewsContextProvider>
);

expect(renderedComponent.toJSON()).toMatchSnapshot();

describe("Given a newsReducer", () => {
  describe("When it receives a list of news", () => {
    test("Then it should return a list with the news to load", () => {
      const newsList = getNews();
      const action = loadNewsListAction(newsList);

      const newList = newsReducer(newsList, action);

      expect(newList).toEqual(newsList);
    });
  });
});
