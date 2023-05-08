import { render, screen } from "@testing-library/react";
import InfiniteScroll from "./Scroller";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Check Main Scroller Component", () => {
  it("Component Should be defined", () => {
    const wrapper = mount(<InfiniteScroll />);
    expect(wrapper).toBeDefined();
  });
});
