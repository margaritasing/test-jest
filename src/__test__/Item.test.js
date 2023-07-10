import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PhotoContext } from "../context/PhotoContext";
import Item from '../components/Item';



describe('Item Component', () => {
  it('renders the Item component correctly', () => {
    const searchTerm = 'Nature';
    const mockImages = [
      { id: 1, url: "https://example.com/image1.jpg" },
      { id: 2, url: "https://example.com/image2.jpg" },
      { id: 3, url: "https://example.com/image3.jpg" }
    ];
    const mockLoading = false;
    const mockRunSearch = jest.fn();

    render(
      <Router>
       <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
            <Item searchTerm={searchTerm} />
        </PhotoContext.Provider>
      </Router>
    );

    // Verificar que se renderiza el texto con el término de búsqueda
    const headingElement = screen.getByText(`${searchTerm} Pictures`);
    expect(headingElement).toBeInTheDocument();
  });
});
