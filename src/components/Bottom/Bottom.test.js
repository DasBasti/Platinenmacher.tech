import React from 'react';
import { render, screen } from '@testing-library/react';
import Bottom from './Bottom';

test('renders bottom line', () => {
  render(<Bottom />);
  const linkElement = screen.getByText(/Build test/i);
  expect(linkElement).toBeInTheDocument();
});
