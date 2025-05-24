import { render } from "@testing-library/react";
import Appointment from "../Appointment";


describe("Appointment", () => {
  it("Renders without crashing", () => {
    render(<Appointment />)
  });
});