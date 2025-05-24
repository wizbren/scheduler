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
    const { getByPlaceholderText } = render(
      <Form interviewers={interviewers} />
    );

    const input = getByPlaceholderText("Enter Student Name")
    expect(input).toHaveValue("");
  });

  it("renders with initial student name", () => {
    const { getByTestId } = render(
      <Form interviewers={interviewers} name="Lydia Miller-Jones" />
    );

    const input = getByTestId("student-name-input");
    expect(input).toHaveValue("Lydia Miller-Jones");
  });
});