import React from "react";
import HelloWorld, { Modal, Loader } from "./sample-component";
import { render, screen, fireEvent } from "@testing-library/react";

describe("./sample-component.js — react-testing-library", () => {
  test("renders <HelloWorld />", () => {
    render(<HelloWorld />);

    const helloWorldText = screen.getByTestId("helloWorld");

    expect(helloWorldText).toBeInTheDocument();
  });

  test("checks if the model is open", () => {
    render(<Modal />);

    const openModalBtn = screen.getByTestId("openModalBtn");
    const modal = screen.getByTestId("modal");

    // modal is hidden
    expect(modal).not.toHaveClass("modal--active");

    // fire the event here
    fireEvent.click(openModalBtn);

    // modal is visible
    expect(modal).toHaveClass("modal--active");
  });

  test("renders loader component", () => {
    const setIsLoaded = jest.fn();

    // this only works because we use React.useState inside our component
    jest
      .spyOn(React, "useState")
      .mockImplementation(() => [false, setIsLoaded]);

    render(<Loader component={HelloWorld} />);

    expect(setIsLoaded).toHaveBeenCalledTimes(1);
    expect(setIsLoaded).toHaveBeenCalledWith(true);
  });
});
