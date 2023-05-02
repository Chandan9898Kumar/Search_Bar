import { render, screen, fireEvent } from "@testing-library/react";
import StopWatchApp from './WatchStop'
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });




describe('Stop watch Main PageCheck',()=>{

it('check text on page',()=>{
    render(<StopWatchApp  />)
    
})





})