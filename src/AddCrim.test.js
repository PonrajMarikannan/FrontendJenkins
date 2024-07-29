import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddCrim from './components/admin/AddCrim';
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


it("renders 'Heading text' " , () =>{
  render(<AddCrim />);
const linkElement = screen.getByRole("form-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Case Number Field' " , () =>{
  render(<AddCrim />);
const linkElement = screen.getByRole("cnlbl");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Date of Birth Field' " , () =>{
  render(<AddCrim />);
const linkElement = screen.getByRole("cdlbl");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Case ID Field' " , () =>{
  render(<AddCrim />);
const linkElement = screen.getByRole("cilbl");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Button Field' " , () =>{
  render(<AddCrim />);
const linkElement = screen.getByRole("btnlbl");
expect(linkElement).toBeInTheDocument();
})

