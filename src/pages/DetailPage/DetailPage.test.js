import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";
import getNewsDetails from "../../factories/detailFactory";

describe("Given a DetailPage component,", () => {
  let details;
  beforeAll(() => {
    details = {
      sectionName: "SECTION",
      articleDate: "20-10-1994",
      imageSource: "http://url/",
      articleTitle: "ULTIMAS NOTICIAS",
      articleSubtitle: "Que fuerte todo esto, no me lo creo",
      bodyText:
        "Woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow",
    };
  });
  describe("When it receives a section, a date, an image url, a title, a subtitle and a text", () => {
    test("Then it renders the detail page", () => {
      render(
        <DetailPage
          sectionName={details.sectionName}
          articleDate={details.articleDate}
          imageSource={details.imageSource}
          articleTitle={details.articleTitle}
          articleSubtitle={details.articleSubtitle}
          bodyText={details.bodyText}
        />
      );
    });

    test("Then it renders the detail page with the content it has received", () => {
      render(
        <DetailPage
          sectionName={details.sectionName}
          articleDate={details.articleDate}
          imageSource={details.imageSource}
          articleTitle={details.articleTitle}
          articleSubtitle={details.articleSubtitle}
          bodyText={details.bodyText}
        />
      );

      const sectionRendered = screen.getByText(details.sectionName);
      const dateRendered = screen.getByText(details.articleDate);

      const titleRendered = screen.getByText(details.articleTitle);
      const subtitleRendered = screen.getByText(details.articleSubtitle);
      const textRendered = screen.getByText(details.bodyText);

      const imageRendered = screen.getByAltText(
        "thumbnail of the article. Api not descriptive enough, sorry"
      );

      expect(sectionRendered).toBeInTheDocument();
      expect(dateRendered).toBeInTheDocument();
      expect(imageRendered.src).toBe(details.imageSource);
      expect(titleRendered).toBeInTheDocument();
      expect(subtitleRendered).toBeInTheDocument();
      expect(textRendered).toBeInTheDocument();
    });
  });
  describe("When it receives nothing", () => {
    test("Then it still renders", () => {
      render(<DetailPage />);
    });
  });
});
