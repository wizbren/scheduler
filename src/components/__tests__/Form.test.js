import { render, cleanup, fireEvent } from "@testing-library/react";
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


  it("validates that the student name is not blank", () => {
    const onSave = jest.fn();      //this is the mock onSave
    const { getByText } = render(
      <Form interviewers={interviewers} onSave={onSave} />
    );

    fireEvent.click(getByText("Save"))

    expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });


  it("validates that the interviewer cannot be null", () => {
    const onSave = jest.fn();
    const { getByText } = render(
      <Form interviewers={interviewers} name="Lydia Miller-Jones" onSave={onSave} />
    );

    fireEvent.click(getByText("Save"));

    expect(getByText(/please select an interviewer/i)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  })

  
  it("validates that the interviewer cannot be null", () => {
    const onSave = jest.fn();
    const { getByText, queryByText } = render(
      <Form interviewers={interviewers} name="Lydia Miller-Jones" interviewer={1} onSave={onSave} />
    );

    fireEvent.click(getByText("Save"));

    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    expect(queryByText(/please select an interviewer/i)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1);
  });
});