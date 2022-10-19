import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('rende<rs headline', () => {
    render(<App />);

    screen.debug();
  });
});
