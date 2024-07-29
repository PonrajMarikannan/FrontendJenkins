import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import EditCrim from '../components/admin/EditCrim';

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


it("renders 'Heading Name' " , () =>{
  render(<EditCrim />);
const linkElement = screen.getByRole('head-lbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Id Field' " , () =>{
  render(<EditCrim />);
const linkElement = screen.getByRole('id-lbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Name Field' " , () =>{
  render(<EditCrim />);
const linkElement = screen.getByRole('name-lbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'DOB Field' " , () =>{
  render(<EditCrim />);
const linkElement = screen.getByRole('dob-lbl');
expect(linkElement).toBeInTheDocument();
})



it("renders 'Button Field' " , () =>{
  render(<EditCrim />);
const linkElement = screen.getByRole('btn-lbl');
expect(linkElement).toBeInTheDocument();
})
