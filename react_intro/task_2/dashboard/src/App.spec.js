import { render , screen } from '@testing-library/react';
import App from './App';

test('renders h1 element with text "School Dashboard"', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /school dashboard/i });
    expect(headerElement).toBeInTheDocument();
  });

  test('renders correct text content in App-body and App-footer', () => {
    render(<App />);
    
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(/copyright 2024 - holberton school/i);
    
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });
  
  test('renders an img element with alt text "holberton logo"', () => {
    render(<App />);
    const imageElement = screen.getByAltText(/holberton logo/i);
    expect(imageElement).toBeInTheDocument();
  });
  