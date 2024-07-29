import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import  ViewCrim from './components/admin/ViewCrim';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Criminal View Component', () => {

  test('renders for heading', () => {
    render(
      <MemoryRouter>
        <ViewCrim />
      </MemoryRouter>
    );
    const HeadingElement = screen.getByRole('hlbl');
    expect(HeadingElement).toBeInTheDocument();
  });

  test('renders for Add Button', () => {
    render(
      <MemoryRouter>
        <ViewCrim />
      </MemoryRouter>
    );
    const AddButton = screen.getByRole('addbtn');
    expect(AddButton).toBeInTheDocument();
  });

  test('renders for Overall Table', () => {
    render(
      <MemoryRouter>
        <ViewCrim />
      </MemoryRouter>
    );
    const Table = screen.getByRole('tbl');
    expect(Table).toBeInTheDocument();
  });

  test('renders for table Head', () => {
    render(
      <MemoryRouter>
        <ViewCrim />
      </MemoryRouter>
    );
    const TableHead = screen.getByRole('thead');
    expect(TableHead).toBeInTheDocument();
  });

  test('renders for Table Body', () => {
    render(
      <MemoryRouter>
        <ViewCrim />
      </MemoryRouter>
    );
    const TableBody = screen.getByRole('tblb');
    expect(TableBody).toBeInTheDocument();
  });

});
