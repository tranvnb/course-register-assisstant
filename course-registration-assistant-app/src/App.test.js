import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

test('renders learn react link', () => {

  const history = createMemoryHistory();
  history.push('/group');

  render(    
  <Router history={history}>
    <App />
  </Router>);
  const linkElement = screen.getByText(/Group Brian/i);
  expect(linkElement).toBeInTheDocument();
});
