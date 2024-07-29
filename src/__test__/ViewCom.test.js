import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ViewCom from '../components/victim/ViewCom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Victim View Component', () => {

  test('renders for heading', () => {
    render(
      <MemoryRouter>
        <ViewCom />
      </MemoryRouter>
    );
    const HeadingElement = screen.getByRole('hlbl');
    expect(HeadingElement).toBeInTheDocument();
  });

  test('renders for Add Button', () => {
    render(
      <MemoryRouter>
        <ViewCom />
      </MemoryRouter>
    );
    const AddButton = screen.getByRole('addbtn');
    expect(AddButton).toBeInTheDocument();
  });

  test('renders for Overall Table', () => {
    render(
      <MemoryRouter>
        <ViewCom />
      </MemoryRouter>
    );
    const Table = screen.getByRole('tbl');
    expect(Table).toBeInTheDocument();
  });

  test('renders for table Head', () => {
    render(
      <MemoryRouter>
        <ViewCom />
      </MemoryRouter>
    );
    const TableHead = screen.getByRole('thead');
    expect(TableHead).toBeInTheDocument();
  });

  test('renders for Table Body', () => {
    render(
      <MemoryRouter>
        <ViewCom />
      </MemoryRouter>
    );
    const TableBody = screen.getByRole('tblbl');
    expect(TableBody).toBeInTheDocument();
  });



});
