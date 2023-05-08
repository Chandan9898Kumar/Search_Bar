import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

describe('Check App Component', () => {
  it('Verify Functional Search', () => {
    render(<App />);
    const linkElement = screen.getByText(/Function Search/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Verify Class Search', () => {
    render(<App />)
    const classSearch=screen.getByText(/Class Search/i);
    expect(classSearch).toBeInTheDocument();
  })

  it('Verify EMI Calculator',()=>{
    render(<App />)
    const emiCalci=screen.getByText(/EMI Calculator/i);
    expect(emiCalci).toBeInTheDocument();
  })
  it('Verify Home',()=>{
    render(<App />)
    const home=screen.getByText(/Home/i)
    expect(home).toBeInTheDocument();
  })
  it('should verify Dictionary',()=>{
    render(<App />)
    const Dictionary=screen.getByText(/Dictionary/i)
    expect(Dictionary).toBeInTheDocument();
  })
  
})