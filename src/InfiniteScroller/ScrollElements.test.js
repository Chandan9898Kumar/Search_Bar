import { render, screen, fireEvent } from "@testing-library/react";
import ScrollingElement from "./ScrollElements";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("ScrollElements Testing", () => {
  it("should check ScrollElements to be defined", async () => {
    const getData = () => {};
    const pageNumber = {
      current: 1,
    };
    const inputValue = "ScrollElements";
    const listData = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    const renderItem = () => {};
    const wrapper = shallow(
      <ScrollingElement
        getData={getData}
        inputValue={inputValue}
        pageNumber={pageNumber}
        listData={listData}
        renderListItem={renderItem}
      />
    );
    expect(wrapper).toBeDefined();
  });
});
