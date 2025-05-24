import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Application from "../Application";


describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { findByText } = render(<Application />);

    return findByText("Monday").then(() => {
      fireEvent.click(document.querySelector("[data-testid='day'] [alt='Tuesday']"));
      return findByText("Potato Potato");
    });
  });
});