import { render } from "@testing-library/react";
import Appointment from "../../components/Appointment";


describe("Appointment", () => {
  it("Renders without crashing", () => {
    render(<Appointment />)
  });
});