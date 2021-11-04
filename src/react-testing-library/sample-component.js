import React, { useState, useEffect } from "react";

export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button data-testid="openModalBtn" onClick={handleOpenModal}>
        Open Modal
      </button>

      <div
        className={`modal ${isModalOpen ? "modal--active" : ""}`}
        data-testid="modal"
      >
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export const Loader = ({ component: Component }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    // imagine we're fetching...
    setIsLoaded(true);
  }, []);

  return isLoaded ? <Component /> : <p>Loading...</p>;
};

const HelloWorld = () => (
  <div>
    <p data-testid="helloWorld">Hello World</p>
  </div>
);

export default HelloWorld;
