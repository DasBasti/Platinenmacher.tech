import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders navigation bar', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/Der Platinenmacher/i);
  expect(linkElement).toBeInTheDocument();
});
