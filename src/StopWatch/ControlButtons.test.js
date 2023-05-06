import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ControlButton from "./ControlButtons";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Check Control Button Component", () => {
  it("Should Component be defined", () => {
    const wrapper = mount(<ControlButton />);
    expect(wrapper).toBeDefined();
  });

  it("should check text Start", () => {
    render(<ControlButton />);
    const textStart = screen.getByText(/Start/i);
    expect(textStart).toBeInTheDocument();
  });

  it("should check text Reset", () => {
    let isActive = true;
    render(<ControlButton active={isActive} />);
    const textReset = screen.getByText(/Reset/i);
    expect(textReset).toBeInTheDocument();
  });

  it("Should hit on Start Button", () => {
    let isActive = false;
    const handleStartTime = () => {};
    render(
      <ControlButton active={isActive} handleStartTime={handleStartTime} />
    );
    const startButton = screen.getByTestId("StartButton");
    fireEvent.click(startButton, new MouseEvent("click", { bubbles: true }));
  });

  it("Should hit on Reset Button", () => {
    let isActive = true;
    const handleReset = () => {};
    render(<ControlButton active={isActive} handleReset={handleReset} />);
    const resetButton = screen.getByTestId("ResetButton");
    fireEvent.click(resetButton, new MouseEvent("click", { bubbles: true }));
  });

  it("Should hit on PauseContinueButton", () => {
    let isActive = true;
    const handlePauseResume = () => {};
    render(
      <ControlButton active={isActive} handlePauseResume={handlePauseResume} />
    );
    const pauseContButton = screen.getByTestId("PauseContButton");

    fireEvent.click(
      pauseContButton,
      new MouseEvent("click", { bubbles: true })
    );
  });
});
