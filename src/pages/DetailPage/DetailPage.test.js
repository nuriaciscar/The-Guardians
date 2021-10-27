import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

describe("Given a DetailPage component,", () => {
  let details;
  beforeAll(() => {
    details = {
      sectionName: "A",
      articleDate: "B",
      imageSource: "http://loles/",
      articleTitle: "D",
      articleSubtitle: "E",
      bodyText: "F",
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

      screen.debug();

      expect(sectionRendered).toBeInTheDocument();
      expect(dateRendered).toBeInTheDocument();
      expect(imageRendered.src).toBe(details.imageSource);
      expect(titleRendered).toBeInTheDocument();
      expect(subtitleRendered).toBeInTheDocument();
      expect(textRendered).toBeInTheDocument();
    });
  });
});
