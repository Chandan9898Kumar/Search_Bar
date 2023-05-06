import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SetTimer from "./TimerSet";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Check SetTimer Component", () => {
  it("Should Component be Defined and time is to check  variable second", () => {
    const wrapper = mount(<SetTimer time={100} />);
    expect(wrapper).toBeDefined();
  });

  it("time is to check  variable Minute,Hour", () => {
    const wrapper = mount(<SetTimer time={999999999999990} />);
    expect(wrapper).toBeDefined();
  });

  it("time is to check  variable MilliSecond", () => {
    const wrapper = mount(<SetTimer time={10} />);
    expect(wrapper).toBeDefined();
  });
});
