import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from './components/auth/Signup';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mock = new MockAdapter(axios);

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);


it("renders 'Register Heading text' " , () =>{
  render(<Register />);
const linkElement = screen.getByRole("login-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Name Field' " , () =>{
  render(<Register />);
const linkElement = screen.getByRole("name-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Email Field' " , () =>{
  render(<Register />);
const linkElement = screen.getByRole("email-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Password Field' " , () =>{
  render(<Register />);
const linkElement = screen.getByRole("Password-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'submit button' ", () => {
  render(<Register />);
  const loginButton = screen.getByRole('button', { name: "Sign Up" });
  expect(loginButton).toBeInTheDocument();
});

test('checks link of Login', () => {
    render(<Register />);

    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    const linkElement = screen.getByRole('link', { name: 'Log in' });
    expect(linkElement).toHaveAttribute('href', '/Login');
  });


it("renders 'Navigate Back' ", () => {
  render(<Register />);
  const loginButton = screen.getByRole('button', { name: "Go Back" });
  expect(loginButton).toBeInTheDocument();
});
