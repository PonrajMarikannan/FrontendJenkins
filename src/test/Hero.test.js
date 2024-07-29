import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Hero from '../components/hero/Hero';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mock = new MockAdapter(axios);

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);

afterEach(() => {
  mock.reset(); 
});


it("renders 'Hero Name' " , () =>{
  render(<Hero />);
const linkElement = screen.getByRole('hero-name');
expect(linkElement).toBeInTheDocument();
})


test('checks link of Login', () => {
    render(<Hero />);
    
    expect(screen.getByText('Get started')).toBeInTheDocument();
    const linkElement = screen.getByRole('link', { name: 'Get started' });
    expect(linkElement).toHaveAttribute('href', './Login');
  
  });

test('checks image of hero', () => {
    render(<Hero />);
    
    const imageElement = screen.getByAltText('Students');
    expect(imageElement).toBeInTheDocument();
  
    expect(imageElement).toHaveAttribute(
      'src',
      'https://myciti.in/wp-content/uploads/2021/02/complaint-01.png'
    );
  
  });

