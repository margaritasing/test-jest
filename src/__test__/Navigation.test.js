import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
  it('renders the Navigation component correctly', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    // Verificar que se renderizan los enlaces correctamente
    const mountainLink = screen.getByRole('link', { name: /mountain/i });
    const beachLink = screen.getByRole('link', { name: /beaches/i });
    const birdLink = screen.getByRole('link', { name: /birds/i });
    const foodLink = screen.getByRole('link', { name: /food/i });

    expect(mountainLink).toBeInTheDocument();
    expect(beachLink).toBeInTheDocument();
    expect(birdLink).toBeInTheDocument();
    expect(foodLink).toBeInTheDocument();
  });
});
