import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Application from "../Application";


describe("Application", () => {
  
  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { queryByText, getByText, findByText } = render(<Application />);
    await findByText("Monday");
    fireEvent.click(getByText("Tuesday"));
    expect(queryByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", () => {

    const { container } = render(<Application />);
    console.log(container);
  });
});