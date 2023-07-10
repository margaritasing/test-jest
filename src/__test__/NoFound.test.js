import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('NotFound Component', () => {
  it('renders the NotFound component correctly', () => {
    render(<NotFound />);

    // Verificar que se renderiza el texto correctamente
    const headingElement = screen.getByRole('heading', { level: 2, name: /Page Not Found/i });

    expect(headingElement).toBeInTheDocument();
  });
});
