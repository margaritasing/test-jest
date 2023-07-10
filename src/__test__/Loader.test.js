import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from '../components/Loader';

describe('Loader Component', () => {
  it('renders the Loader component correctly', () => {
    render(
        <Router>
            <Loader />
        </Router>
    );

    // Verificar que se renderiza el componente Loader
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});

