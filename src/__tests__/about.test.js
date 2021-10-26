import React from 'react';
import { render, screen } from '../app-test-utils';
import About from '../components/about';

const renderAbout = () => render(<About />);

describe('<About />', () => {
  test('renders the about page', async () => {
    renderAbout();

    expect(
      screen.getByRole('heading', { name: /about reactweather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /openweathermap api/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /react/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /tailwindcss/i }),
    ).toBeInTheDocument();
    
    
  });
});
