import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders the Header component correctly', () => {   
    render(
      <Router>
        <Header />
      </Router>
    );

    // Verificar que se renderiza el texto "SnapShot"
    const titleElement = screen.getByText('SnapShot');
    expect(titleElement).toBeInTheDocument();

    // Verificar que se renderiza el componente Form
    const formElement = screen.getByPlaceholderText('Search...').closest('form');
    expect(formElement).toBeInTheDocument();
    

    // Verificar que se renderiza el componente Navigation
    const navigationElement = screen.getByRole('navigation');
    expect(navigationElement).toBeInTheDocument();
  });
});
