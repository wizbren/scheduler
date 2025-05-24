import { render, cleanup } from "@testing-library/react";
import Form from "../Appointment/Form";


afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      student: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];

  it("renders without student name if not provided", () => {
    // Where is getByPlaceholderText coming from?
    const input = getByPlaceholderText("Enter Student Name")
    expect(input).toHaveValue("");
  });

  it("renders with initial student name", () => {
    // Where is getByTestId coming from?
    const input = getByTestId("student-name-input")
    expect(input).toHaveValue("Lydia Miller-Jones");
  });
});