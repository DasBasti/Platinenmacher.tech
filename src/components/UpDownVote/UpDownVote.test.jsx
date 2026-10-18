import React from 'react';
import { render, screen } from '@testing-library/react';
import UpDownVote from '.';

test('renders navigation bar', () => {
  render(<UpDownVote upvotes={123} voted={0}/>);
  const linkElement = screen.getByText(/123/i);
  expect(linkElement).toBeInTheDocument();
});
