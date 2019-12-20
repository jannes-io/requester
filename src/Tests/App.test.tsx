import React from 'react';
import { render } from '@testing-library/react';
import App from '../Containers/App';
import '@testing-library/jest-dom/extend-expect';

test('App renders something', () => {
  const { getByText } = render(<App />);
  const hello = getByText(/Hello/i);
  expect(hello).toBeInTheDocument();
});
