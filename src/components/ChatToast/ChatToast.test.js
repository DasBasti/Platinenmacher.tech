import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatToast from '.';

test('PopUp Toast Message', () => {
  render(<ChatToast username="Tester" message="Test" datetime="123213"/>);
});
