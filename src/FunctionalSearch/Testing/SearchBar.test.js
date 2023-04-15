import SearchBar from "../SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Testing SearchBar", () => {
  it("should test Component", () => {
    const wrapper = mount(<SearchBar />);
    expect(wrapper).toBeDefined();
  });

  it("should fireEvent Work", () => {
    let setCondition = function () {};
    render(<SearchBar setCondition={setCondition} />);
    const firingEvent = screen.getByTestId("inputField");
    fireEvent.change(firingEvent, { target: { value: "Cricket" } });
  });
});
