import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectFeed from './ProjectFeed';

test('renders a project feed bar', () => {
  render(<ProjectFeed />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
