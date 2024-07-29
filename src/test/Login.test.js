import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/auth/Login';
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


it("renders 'Login Heading text' " , () =>{
  render(<Login />);
const linkElement = screen.getByRole("login-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Email text' " , () =>{
  render(<Login />);
const linkElement = screen.getByRole("email-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'submit button' ", () => {
  render(<Login />);
  const loginButton = screen.getByRole('button', { name: "Sign in" });
  expect(loginButton).toBeInTheDocument();
});



it("renders 'Navigate Back' ", () => {
  render(<Login />);
  const loginButton = screen.getByRole('button', { name: "Go Back" });
  expect(loginButton).toBeInTheDocument();
});
