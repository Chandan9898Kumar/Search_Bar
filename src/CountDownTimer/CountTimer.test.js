import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CountdownTimer from "./CountTimer";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("CountdownTimer Testing", () => {
  it("should check Text CountDown Timer", () => {
    render(<CountdownTimer />);
    const text = screen.getByText(/CountDown Timer/i);
    expect(text).toBeInTheDocument();
  });

  it("should check text start", () => {
    render(<CountdownTimer />);
    const start = screen.getByText(/Start/i);
    expect(start).toBeInTheDocument();
  });

  it("should check text pause", () => {
    render(<CountdownTimer />);
    const pause = screen.getByText(/Pause/i);
    expect(pause).toBeInTheDocument();
  });

  it("should check text reset", () => {
    render(<CountdownTimer />);
    const reset = screen.getByText(/Reset/i);
    expect(reset).toBeInTheDocument();
  });

  it("should component be defined", () => {
    const wrapper = shallow(<CountdownTimer />);
    expect(wrapper).toBeDefined();
  });

  it("should check Hour input element", () => {
    render(<CountdownTimer />);
    const hourHand = screen.getByTestId("Hour");
    fireEvent.change(hourHand, { target: { value: 88 } });
  });

  it("Should check Minute input element", () => {
    render(<CountdownTimer />);
    const minuteHand = screen.getByTestId("Minute");
    fireEvent.change(minuteHand, { target: { value: 55 } });
  });
  it("should check second input element", () => {
    render(<CountdownTimer />);
    const secondHand = screen.getByTestId("Second");
    fireEvent.change(secondHand, { target: { value: 22 } });
  });

  it("should check start button", () => {
    render(<CountdownTimer />);
    const startButton = screen.getByTestId("startButton");
    fireEvent.click(startButton, new MouseEvent("click", { bubbles: true }));
  });

  it("should check pause Button", () => {
    render(<CountdownTimer />);
    const pauseButton = screen.getByTestId("pauseButton");
    fireEvent.click(pauseButton, new MouseEvent("click", { bubbles: true }));
  });

  it("should check reset Button", () => {
    render(<CountdownTimer />);
    const pauseButton = screen.getByTestId("resetButton");
    fireEvent.click(pauseButton, new MouseEvent("click", { bubbles: true }));
  });
});
