import { render, screen } from "@testing-library/react";
import DetailEditPage from "./DetailEditPage";

describe("Given a DetailEditPage component,", () => {
  describe("When it receives a section, an image, a date, a title, a subtitle and a text", () => {
    let detailNews;
    beforeAll(() => {
      detailNews = {
        sectionName: "SECTION",
        imageSource: "",
        articleDate: "",
        articleTitle: "",
        articleSubtitle: "",
        bodyText: "",
        id: "",
      };
    });
    test("Then it should render the object created on the page", () => {
      render(
        <DetailEditPage
          sectionName={detailNews.sectionName}
          imageSource={detailNews.imageSource}
          articleDate={detailNews.articleDate}
          articleTitle={detailNews.articleTitle}
          articleSubtitle={detailNews.articleSubtitle}
          bodyText={detailNews.bodyText}
        />
      );

      const sectionRendered = screen.getByText(detailNews.sectionName);
      const dateRendered = screen.getByText(detailNews.articleDate);

      const titleRendered = screen.getByText(detailNews.articleTitle);
      const subtitleRendered = screen.getByText(detailNews.articleSubtitle);
      const textRendered = screen.getByText(detailNews.bodyText);

      const imageRendered = screen.getByAltText(
        "thumbnail of the article. Api not descriptive enough, sorry"
      );

      expect(sectionRendered).toBeInTheDocument();
      expect(dateRendered).toBeInTheDocument();
      expect(imageRendered.src).toBe(detailNews.imageSource);
      expect(titleRendered).toBeInTheDocument();
      expect(subtitleRendered).toBeInTheDocument();
      expect(textRendered).toBeInTheDocument();
    });
  });
});
