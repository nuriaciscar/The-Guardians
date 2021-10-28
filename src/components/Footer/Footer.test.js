import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Header component,", () => {
  describe("It recives nothing, so...", () => {
    test("Then it renders a header", () => {
      render(<Footer />);
    });
  });
});
