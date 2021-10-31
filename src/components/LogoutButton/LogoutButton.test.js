import { render } from "@testing-library/react";
import LogoutButton from "./LogoutButton";

describe("Given a LogoutButton Component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a button", () => {
      render(<LogoutButton />);
    });
  });
});
