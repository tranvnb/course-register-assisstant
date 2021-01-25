import { render, screen } from '@testing-library/react';
import Group from '../../App/components/Group';

test('renders group list', () => {
  render(<Group />);
  const groupList = screen.getByText(/group brian/i);
  expect(groupList).toBeInTheDocument();
});