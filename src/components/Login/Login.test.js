import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Login from '.';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import renderWithRouter from "../../utils/test.util.js";
import App from '../../App';
import { Router } from 'react-router-dom';

test('renders login component', () => {
  render(<Login />);

  const lgButton = screen.getByRole('button', {id: /signInButton/i});
  const lgUsername = screen.getByRole('textbox', {id: /email/i});
  const lgPassword = screen.getByRole('textbox', {id: /password/i});
  expect(lgButton).toBeInTheDocument();
  expect(lgUsername).toBeInTheDocument();
  expect(lgPassword).toBeInTheDocument();
});

test('router with test utils', () => {
    renderWithRouter(<Login />, { route: '/login' })
    const lgButton = screen.getByRole('button', {id: /signInButton/i});
    const lgUsername = screen.getByRole('textbox', {id: /email/i});
    const lgPassword = screen.getByRole('textbox', {id: /password/i});
    expect(lgButton).toBeInTheDocument();
    expect(lgUsername).toBeInTheDocument();
    expect(lgPassword).toBeInTheDocument();
});

test('user login action fail when no data input', () => {

    renderWithRouter(<Login />, { route: '/login' });
    const lgButton = screen.getByRole('button', {id: /signInButton/i});
    const leftClick = { button: 0 }
    userEvent.click(lgButton, leftClick);

    //still show login form
    expect(lgButton).toBeInTheDocument();
});


