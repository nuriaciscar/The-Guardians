import KittenPage from "./KittenPage";
import { server } from "../../mocks/server";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import KittenContextProvider from "../../store/contexts/KittenContextProvider";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import App from "../../App";
import paths from "../../paths/paths";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a KittenPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the names of the kitten and their age", async () => {
      render(
        <KittenContextProvider>
          <KittenPage />
        </KittenContextProvider>
      );
      const text1 = await screen.findByText("Lorenzo is 13 years old");
      const text2 = await screen.findByText("Luis is 13 years old");
      expect(text1).toBeInTheDocument();
      expect(text2).toBeInTheDocument();
    });
  });
});

describe("When the user clicks on delete the first kitty", () => {
  test("Then it shouldn't show the name of the first kitty", async () => {
    render(
      <KittenContextProvider>
        <KittenPage />
      </KittenContextProvider>
    );
    const buttons = await screen.findAllByRole("link", { name: /delete/i });
    userEvent.click(buttons[0]);
    await waitForElementToBeRemoved(() => screen.getByText("Lorenzo"));
    const text = screen.queryByText("Lorenzo");
    expect(text).not.toBeInTheDocument();
  });
});

describe("When the user clicks on view details of the first kitty", () => {
  test("Then it should take the user to the details", async () => {
    render(
      <MemoryRouter initialEntries={[paths.list]}>
        <KittenContextProvider>
          <App />
        </KittenContextProvider>
      </MemoryRouter>
    );

    const buttons = await screen.findAllByRole("link", {
      name: /view detail/i,
    });
    userEvent.click(buttons[0]);

    const text = screen.getByText("Kitty detail 1");
    expect(text).toBeInTheDocument();
  });
});
