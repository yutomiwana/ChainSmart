// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainSmartHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainSmartHub/i);
    expect(titleElement).toBeInTheDocument();
});
