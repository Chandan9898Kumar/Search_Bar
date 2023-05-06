import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import StopWatchApp from "./WatchStop";
// import ControlButton from "./ControlButtons";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });


// jest.mock("./ControlButtons", () => {
//   return jest.fn().mockImplementation((props) => (
//     (<>
//                  {props}
//     </>)));
// });

describe("Stop watch Main PageCheck", () => {
  //   let useState = jest.fn();
  //   beforeEach(() => {
  //     useState.mockImplementation(jest.requireActual("react").useState);
  //   });
  //   it("Actual test", ()=>{
  //     useState.mockImplementation(()=>["someMockedValue", 'someMockOrSpySetter'])
  //   })


  it("should render contact information", () => {
    let element = shallow(<StopWatchApp />);
    expect(element).toBeDefined();
  });

  it("check text on page", () => {
    render(<StopWatchApp />);
    let textOne = screen.getByText(/Stop Watch/i);
    expect(textOne).toBeInTheDocument();
  });

  it("Should check useEffect", () => {
    const wrapper = mount(<StopWatchApp />);
    expect(wrapper).toBeDefined();
  });
});
