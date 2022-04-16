import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatToast from '.';

test('PopUp Toast Message', () => {
  render(<ChatToast username="Tester" message="Testmessage" datetime="123213"/>);

  expect(screen.getByText(/Tester/)).toBeInTheDocument();
  expect(screen.getByText(/Testmessage/)).toBeInTheDocument();
});

test('PopUp Toast Message autoclose', () => {
  render(<ChatToast username="Tester" message="Testmessage" datetime="123213"/>);

  expect(screen.getByText(/Tester/)).toBeInTheDocument();
  expect(screen.getByText(/Testmessage/)).toBeInTheDocument();
  const element = screen.getByRole("alert");
  expect(element).toBeInTheDocument();
});
