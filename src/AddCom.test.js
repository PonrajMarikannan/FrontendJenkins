import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddCom from './components/victim/AddCom';
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
  render(<AddCom />);
const linkElement = screen.getByRole("form-heading");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Case Number Field' " , () =>{
  render(<AddCom />);
const linkElement = screen.getByRole("cnlbl");
expect(linkElement).toBeInTheDocument();
})

it("renders ' Case Description Field' " , () =>{
  render(<AddCom />);
const linkElement = screen.getByRole("cdlbl");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Date of Occurrence Field' " , () =>{
  render(<AddCom />);
const linkElement = screen.getByRole("doclbl");
expect(linkElement).toBeInTheDocument();
})

it("renders 'Button Field' " , () =>{
  render(<AddCom />);
const linkElement = screen.getByRole("btnlbl");
expect(linkElement).toBeInTheDocument();
})

