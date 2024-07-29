import { render, screen } from '@testing-library/react';
import AdminNav from './components/admin/AdminNav';
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
    render(<AdminNav />);
    expect(screen.getByText('Crime Catchers')).toBeInTheDocument();

  });