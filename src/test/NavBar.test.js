import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavBar from '../components/victim/NavBar';
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


test('checks Navbar Links', () => {
    render(<NavBar />);
    expect(screen.getByText('Crime Catchers')).toBeInTheDocument();

  });