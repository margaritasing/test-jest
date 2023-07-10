import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NoImages from '../components/NoImages';

describe('NoImages Component', () => {
  it('renders the NoImages component correctly', () => {
    render(
      <Router>
        <NoImages />
      </Router>
    );

    // Verificar que se renderiza el texto correctamente
    const headingElement = screen.getByRole('heading', { level: 2, name: /No Images Found/i });
    const paragraphElement = screen.getByText(/Please try a different search term/i);

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
