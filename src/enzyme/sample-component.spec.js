/* eslint no-undef: off */
import React from "react";
import { shallow } from "enzyme";
import HelloWorld, { Modal, Loader } from "./sample-component";

describe("./sample-component — enzyme", () => {
  it("<HelloWorld />", () => {
    const helloWorld = shallow(<HelloWorld />);
    const helloWorldText = helloWorld.find('p[data-testid="text"]');

    expect(helloWorldText).toHaveText("Hello World");
  });

  test("checks if the model is open", () => {
    const modalWrapper = shallow(<Modal />);

    const openModalBtn = modalWrapper.find('[data-testid="openModalBtn"]');
    let modal = modalWrapper.find('div[data-testid="modal"]');

    // modal is hidden
    expect(modal).not.toHaveClassName("modal--active");

    // fire the event here
    openModalBtn.simulate("click");

    // re-render
    modalWrapper.instance();

    // find it again
    modal = modalWrapper.find('div[data-testid="modal"]');

    // modal is visible
    expect(modal).toHaveClassName("modal--active");
  });

  test("renders loader component", () => {
    const setIsLoaded = jest.fn();

    jest
      .spyOn(React, "useState")
      .mockImplementation(() => [false, setIsLoaded]);

    shallow(<Loader component={HelloWorld} />);

    expect(setIsLoaded).toHaveBeenCalledTimes(1);
    expect(setIsLoaded).toHaveBeenCalledWith(true);
  });
});
