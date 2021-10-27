/import { render } from "@testing-library/react";
 import Header from "./Header";

 describe("Given a Header component,", () => {
   describe("It recives nothing, so...", () => {
     test("Then it renders a header", () => {
      render(<Header />);
    });
  });
});
