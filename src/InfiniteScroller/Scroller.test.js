import { render, screen,fireEvent } from "@testing-library/react";
import MainComponent from "./Scroller";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Check Main Scroller Component", () => {
  it("Component Should be defined", () => {
    const wrapper = mount(<MainComponent />);
    expect(wrapper).toBeDefined();
  });

  it('Should check Input Field',()=>{
    render(<MainComponent />);
    const fireInput=screen.getByTestId('searchField')
    fireEvent.change(fireInput,{target:{value:'search'}})
  })
  it('should check div element',()=>{
    const { container }= render(<MainComponent />);
    expect(container).toMatchSnapshot();
  })
});
