import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppContext } from './context/AppContext';

describe('App', () => {
  it('renders without crashing', () => {
    const mockContext = {
      doctors: [],
      currencySymbol: '$',
      // add other context values if needed
    };

    const { container } = render(
      <AppContext.Provider value={mockContext}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContext.Provider>
    );
    expect(container).toBeTruthy();
  });
});