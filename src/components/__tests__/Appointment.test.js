import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Application from "../Application";


it("defaults to Monday and changes the schedule when a new day is selected", async () => {
  const { queryByText, getByText,findByText } = render(<Application />);

  await findByText("Monday");

  fireEvent.click(getByText("Tuesday"));
  expect(queryByText("Leopold Silvers")).toBeInTheDocument();
});