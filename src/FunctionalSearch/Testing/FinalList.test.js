import { render, screen } from "@testing-library/react";
import FinalList from "../FinalList";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

const props = {
  result: [
    {
      name: "test",
    },
    {
      place: "uk",
    },
    {
      game: "gta",
    },
  ],
};

describe("Test Final List Component", () => {
  it("test page", () => {
    let condition = false;
    let inputVal = "values";
    const wrapper = shallow(
      <FinalList
        condition={condition}
        inputVal={inputVal}
        result={props.result}
      />
    );
    expect(wrapper).toBeDefined();
  });
});
