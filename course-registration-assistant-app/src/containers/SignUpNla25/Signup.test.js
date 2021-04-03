import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Signup from '.';
import userEvent from '@testing-library/user-event';
import renderWithRouter from "../../utils/test.util.js";
import App from '../../App';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';


test('renders signup component', () => {
    renderWithRouter(<Signup />, {route: '/signup'});
  
    const lgButton = screen.getByRole('button', {id: /signUpButton/i});
    const lgUsername = screen.getByRole('textbox', {id: /email/i});
    const lgPassword = screen.getByRole('textbox', {id: /password/i});
    expect(lgButton).toBeInTheDocument();
    expect(lgUsername).toBeInTheDocument();
    expect(lgPassword).toBeInTheDocument();
  });

  
test('router with test utils', () => {
    renderWithRouter(<Signup />, { route: '/signup' })
    const lgButton = screen.getByRole('button', {id: /signUpButton/i});
    const lgUsername = screen.getByRole('textbox', {id: /email/i});
    const lgPassword = screen.getByRole('textbox', {id: /password/i});
    expect(lgButton).toBeInTheDocument();
    expect(lgUsername).toBeInTheDocument();
    expect(lgPassword).toBeInTheDocument();
});


test('user signup action fail when no data input', () => {

    renderWithRouter(<Signup />, { route: '/signup' });
    const lgButton = screen.getByRole('button', {id: /signUpButton/i});
    const leftClick = { button: 0 }
    userEvent.click(lgButton, leftClick);

    //still show signup form
    expect(lgButton).toBeInTheDocument();
});


it("signup success when data input correct", async () => {

    renderWithRouter(<App />, { route: '/signup' });

    const lgButton = screen.getByRole('button', { id: /signUpButton/i });

    const lgUsername = screen.getByRole('textbox', { id: /email/i });
    const lgPassword = screen.getByTestId('password');


    userEvent.type(lgUsername, 'test@test.com');
    userEvent.type(lgPassword, 'test@test.com');
    userEvent.click(lgButton);

    // navigate away login page
    expect(lgButton).not.toBeInTheDocument();

    //get in group page
    const groupList = screen.getByText(/group brian/i);
    expect(groupList).toBeInTheDocument();
});
