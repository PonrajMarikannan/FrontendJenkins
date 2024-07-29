import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import EditCom from '../components/victim/EditCom';

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
  render(<EditCom />);
const linkElement = screen.getByRole('headinglbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Id Field' " , () =>{
  render(<EditCom />);
const linkElement = screen.getByRole('idlbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Number Field' " , () =>{
  render(<EditCom />);
const linkElement = screen.getByRole('nlbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Case Description Field' " , () =>{
  render(<EditCom />);
const linkElement = screen.getByRole('cdlbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Date of Occurrence Field' " , () =>{
  render(<EditCom />);
const linkElement = screen.getByRole('splbl');
expect(linkElement).toBeInTheDocument();
})

it("renders 'Button Field' " , () =>{
  render(<EditCom />);
const linkElement = screen.getByRole('btnlbl');
expect(linkElement).toBeInTheDocument();
})
