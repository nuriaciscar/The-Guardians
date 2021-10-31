import { render } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("Given a LoginButton component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a button", () => {
      render(<LoginButton />);
    });
  });
});
