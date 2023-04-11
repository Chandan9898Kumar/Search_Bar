import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check App Component', () => {
  it('Verify Functional Search', () => {
    render(<App />);
    const linkElement = screen.getByText(/Functional Search/i);
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
  
})